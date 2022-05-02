/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { MonitorCreateComponentMemo } from "../../components/templete/Product/MonitorCreate";
import { Layout } from "../../components/Layout";

const MonitorCreate = () => {
  return (
    <Layout title={"monitor"}>
      <MonitorCreateComponentMemo />
    </Layout>
  );
};

export default MonitorCreate;