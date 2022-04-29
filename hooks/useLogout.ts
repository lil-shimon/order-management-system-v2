/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import Cookie from "universal-cookie";
import { unSubMeta } from "./useUserChanged";
import firebase from "../firebaseConfig";

const cookie = new Cookie();
export const useLogout = () => {
  const logout = async () => {

    // Subscriptionの停止
    if (unSubMeta) unSubMeta();

    // firebase userのsign out
    await firebase.auth().signOut();

    // cookieのjwt tokenをremove
    cookie.remove("token");
  };

  return { logout };
};