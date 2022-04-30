/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { ChevronDoubleRightIcon, SwitchVerticalIcon } from "@heroicons/react/solid";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import firebase from "../firebaseConfig";
import { FC } from "react";
import Link from "next/link";

export const Auth: FC = () => {
  // 現在のユーザーを取得
  const user = firebase.auth().currentUser;

  const {
    isLogin, email, password, emailChange, passwordChange, authUser, toggleMode,
  } = useFirebaseAuth();
  return (<>
    <form
      onSubmit={authUser}
      className={"mt-8 flex justify-center items-center flex-col"}
    >
      <label>Email: </label>
      <input
        className={"my-3 px-3 py-1 border border-gray-300"}
        placeholder={"email ?"}
        type={"text"}
        value={email}
        onChange={(e) => emailChange(e)}
      />
      <label>Password: </label>
      <input
        className={"my-3 px-3 py-1 border border-gray-300"}
        placeholder={"password ?"}
        type={"password"}
        value={password}
        onChange={(e) => passwordChange(e)}
      />
      <button
        disabled={!email || !password}
        type={"submit"}
        className={"disable:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded focus:outline-none"}
      >
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
    <SwitchVerticalIcon
      onClick={toggleMode}
      className={"my-5 h-5 w-5 text-blue-500 cursor-pointer"}
    />
    {user && (
      <Link href={"/tasks"}>
        <div className={"flex items-center cursor-pointer my-3"}>
          <ChevronDoubleRightIcon className={"h-5 w-5 mx-1 text-blue-500"} />
          <span>to tasks page</span>
        </div>
      </Link>
    )}
  </>);
};