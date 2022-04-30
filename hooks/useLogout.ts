/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import Cookie from "universal-cookie";
import { unSubMeta } from "./useUserChanged";
import firebase from "../firebaseConfig";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { resetEditedNews, resetEditedTask } from "../slicers/uiSlice";

const cookie = new Cookie();
export const useLogout = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const logout = async () => {

    // Subscriptionの停止
    if (unSubMeta) unSubMeta();

    // firebase userのsign out
    await firebase.auth().signOut();

    // ログアウト時に対象キャッシュを削除する
    queryClient.removeQueries("tasks")
    queryClient.removeQueries("news")
    dispatch(resetEditedNews())
    dispatch(resetEditedTask())

    // cookieのjwt tokenをremove
    cookie.remove("token");
  };

  return { logout };
};