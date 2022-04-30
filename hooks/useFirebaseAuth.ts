/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import firebase from "../firebaseConfig";

export const useFirebaseAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const emailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const passwordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setEmail("");
    setPassword("");
  }, []);

  const toggleMode = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  /**
   * ログイン時はメールアドレスとパスワードでログイン
   * 未ログイン時は新規ユーザー追加
   * @type {(e: React.FormEvent<HTMLFormElement>) => Promise<void>}
   */
  const authUser = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch ({ message }) {
        alert(message);
      }
      resetInput();
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch ({ message }) {
        alert(message);
      }
      resetInput();
    }
  }, [email, password, isLogin]);

  return {
    email, password, emailChange, passwordChange, resetInput, isLogin, toggleMode, authUser,
  };
};