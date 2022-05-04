/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { Layout } from "../../components/Layout";
import { LogoCreateComponentMemo } from "../../components/templete/Logo/Create";

const LogoCreate: FC = () => {

  return (
    <Layout title={"logo"}>
      <LogoCreateComponentMemo />
    </Layout>
  );
};

export default LogoCreate;