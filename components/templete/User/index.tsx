/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { UserProps } from "../../../types/types";
import { UserListMemo } from "../../organisms/Users/list";

const UserComponent: FC<UserProps> = ({ data }) => {
  return (
    <DocumentPageLayout>
      <UserListMemo data={data} />
    </DocumentPageLayout>
  );
};

export const UserComponentMemo = memo(UserComponent);