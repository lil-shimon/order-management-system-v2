/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { SidenavMemo } from "../../organisms/Sidenav";
import { DocumentListMemo } from "../../organisms/Documents/list";

export const DocumentComponent: FC = () => {

  return (
    <div className={"flex flex-row w-full px-20"}>
      <SidenavMemo />
      <div className={"ml-20 w-full"}>
        <DocumentListMemo />
      </div>
    </div>
  );
};
