/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { Layout } from "../../components/Layout";
import { OtherCreateComponentMemo } from "../../components/templete/Product/OtherCreate";

const OtherCreate: FC = () => {
  return (
    <Layout title={"other"}>
      <OtherCreateComponentMemo />
    </Layout>
  )
}

export default OtherCreate