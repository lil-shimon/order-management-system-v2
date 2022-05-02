/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { Layout } from "../../components/Layout";
import { JitanCreateComponentMemo } from "../../components/templete/Product/JitanCreate";

const JitanCreate: FC = () => {
  return (
    <Layout title={"jitan"}>
      <JitanCreateComponentMemo />
    </Layout>
  )
}

export default JitanCreate