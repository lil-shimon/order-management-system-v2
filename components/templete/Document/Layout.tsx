/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { FC, ReactNode } from "react";
import { SidenavMemo } from "../../organisms/Sidenav";

interface Props {
  children: ReactNode;
}

export const DocumentPageLayout: FC<Props> = ({ children }) => {
  return (
    <div className={"flex flex-row w-full px-20"}>
      <SidenavMemo />
      <div className={"ml-20 w-full"}>
        {children}
      </div>
    </div>
  );
};