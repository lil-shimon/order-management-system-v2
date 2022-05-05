/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { Layout } from "../../components/Layout";
import { UserCreateComponentMemo } from "../../components/templete/User/Create";

const UserCreate: FC = () => {
  return (
    <Layout title={"user"}>
      <UserCreateComponentMemo />
    </Layout>
  );
};

export default UserCreate;