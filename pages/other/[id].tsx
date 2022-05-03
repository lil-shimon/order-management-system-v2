/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { NextPage } from "next";
import { Layout } from "../../components/Layout";
import { OtherCreateComponentMemo } from "../../components/templete/Product/OtherCreate";

const OtherShow: NextPage = () => {
  return (
    <Layout title={"other"}>
      <OtherCreateComponentMemo />
    </Layout>
  )
}

export default OtherShow