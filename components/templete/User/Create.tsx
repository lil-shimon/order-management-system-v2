/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { useSelector } from "react-redux";
import { userState } from "../../../slicers/documentSlicer";
import { UserFormScreenMemo } from "../../organisms/Users/FormScreen";

const UserCreateComponent: FC = () => {
  const user = useSelector(userState);
  return (
    <DocumentPageLayout>
      <UserFormScreenMemo user={user} />
    </DocumentPageLayout>
  );
};

export const UserCreateComponentMemo = memo(UserCreateComponent);