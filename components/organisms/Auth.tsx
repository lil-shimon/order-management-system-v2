/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { LockClosedIcon, SwitchVerticalIcon } from "@heroicons/react/solid";
import { FC } from "react";
import firebase from "../../firebaseConfig";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

export const Auth: FC = () => {
  // 現在のユーザーを取得
  const user = firebase.auth().currentUser;

  const {
    isLogin, email, password, emailChange, passwordChange, authUser, toggleMode,
  } = useFirebaseAuth();

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2
              className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-400">{isLogin ? "アカウント情報でログイン" : "新規アカウントを作成する"}</h2>
            <div className={"items-center flex justify-center"}>
              <SwitchVerticalIcon onClick={toggleMode}
                                  className={"my-5 h-5 w-5 text-blue-500 cursor-pointer items-center"} />
            </div>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={authUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 dark:text-gray-400 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => emailChange(e)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 dark:text-gray-400 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => passwordChange(e)}
                />
              </div>
            </div>

            <div>

              <button
                type="submit"
                className="disable:opacity-40 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={!email || !password}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                {isLogin ? "ログイン" : "新規作成"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};