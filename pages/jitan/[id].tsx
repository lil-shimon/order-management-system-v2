/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { NextPage } from "next";
import { Layout } from "../../components/Layout";
import { JitanCreateComponentMemo } from "../../components/templete/Product/JitanCreate";

const JitanShow: NextPage = () => {
  return (
    <Layout title={"jitan"}>
      <JitanCreateComponentMemo />
    </Layout>
  )
}

export default JitanShow