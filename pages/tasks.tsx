/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import React, { FC } from "react";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import { useLogout } from "../hooks/useLogout";
import firebase from "../firebaseConfig";
import { ChevronDoubleLeftIcon, LogoutIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { NewsListMemo } from "../components/NewsList";
import { NewsEditMemo } from "../components/NewsEdit";
import { TaskListMemo } from "../components/TaskList";
import { TaskEditMemo } from "../components/TaskEdit";

const Tasks: FC = (props) => {
  const router = useRouter();
  const { logout } = useLogout();
  const user = firebase.auth().currentUser;

  return (
    <Layout title={"tasks"}>
      <p className={"my-3"}>
        {user?.email}
      </p>
      <LogoutIcon
        className={"h-5 w-5 my-3 text-blue-500 cursor-pointer"}
        onClick={() => {
          logout();
          router.push("/");
        }}
      />

      <p className={"mt-10 mb-5 text-blue-500 "}>
        News Edit
      </p>
      <div className={"grid grid-cols-2 gap-40"}>
        <NewsListMemo />
        <NewsEditMemo />
      </div>

      <p className={"mt-10 mb-5 text-blue-500 "}>
        Task Edit
      </p>

      <div className={"grid grid-cols-2 gap-40"}>
        <TaskListMemo />
        <TaskEditMemo />
      </div>

      <Link href={"/"}>
        <div className={"mt-20 flex items-center cursor-pointer"}>
          <ChevronDoubleLeftIcon className={"h-5 w-5 mx-1 text-blue-500"} />
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default Tasks;