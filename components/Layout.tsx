/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { ReactNode, VFC } from "react";
import Head from "next/head";
import Header from "./organisms/Header";

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout: VFC<Props> = ({ children, title = "Welcome to Nextjs" }) => {
  return (<div className={"flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono"}>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Header />
    </header>
    <main className={"flex flex-1 flex-col justify-center items-center w-screen"}>
      {children}
    </main>
    <footer className={"w-full h-24 flex justify-center items-center border-t"}>
      <a className={"flex items-center"}
         href={"https://github.com/lil-shimon"}
         target={"_blank"}
         rel="noreferrer noopener"
      >
        Powered by lil-shimon
        <img
          src={"https://user-images.githubusercontent.com/69175188/166096474-816a2b7e-8d1b-4117-ac6e-8422467d0759.jpg"}
          width={72}
          height={16}
          className={"ml-2"}
          alt={"footer-logo"} />
      </a>
    </footer>
  </div>);
};