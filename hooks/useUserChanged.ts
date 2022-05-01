/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useEffect } from "react";
import firebase from "../firebaseConfig";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";

// snapshotのsubscriptionをunsubscriptionする
// logout時使用する
export let unSubMeta: () => void;

export const useUserChanged = () => {
  const cookie = new Cookie();
  const router = useRouter();
  const HASURA_TOKEN_KEY = "https://hasura.io/jwt/claims";

  useEffect(() => {
    // ユーザー情報が変化
    // 変化したユーザー情報がuserとして利用可能
    const unSubUser = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // ユーザーに対応したJWTトークンを取得
        const token = await user.getIdToken(true);

        // Token結果を取得
        const idTokenResult = await user.getIdTokenResult();

        // カスタムクレイムの内容を取得
        // setCustomClaimがしっかり適応されている場合は取得できる
        // x-hasura-allowed-roles
        // x-hasura-default-role
        // x-hasura-user-id
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];

        // しっかりcustomClaimの値が取得できている場合は取得したjwtTokenをcookieにセットし
        // ページへリダイレクトさせる
        if (hasuraClaims) {
          cookie.set("token", token, { path: "/" });
        }
        // setCustomUserClaimが完了していない時
        if (!hasuraClaims) {

          // userMetaの値が変化するのをモニタリングする
          const userRef = firebase
            .firestore()
            .collection("user_meta")
            .doc(user.uid);

          // 変化があった時実行
          unSubMeta = userRef.onSnapshot(async () => {
            // スナップショットからその時最新のtokenを取得
            const tokenSnap = await user.getIdToken(true);

            // スナップショットからその時最新の結果を取得
            const idTokenResultSnap = await user.getIdTokenResult();

            // CustomClaimが適応されているかを判定するため取得
            const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];

            if (hasuraClaimsSnap) {
              // しっかりcustomClaimの値が取得できている場合は取得したjwtTokenをcookieにセットし
              // ページへリダイレクトさせる
              cookie.set("token", tokenSnap, { path: "/" });
            }
          });
        }
      }
    });
    return () => {
      unSubUser();
    };
  }, []);


  return {};
};