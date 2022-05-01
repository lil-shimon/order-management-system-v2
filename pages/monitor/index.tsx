/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { MonitorComponent } from "../../components/templete/Monitor";
import { FC } from "react";
import { Layout } from "../../components/Layout";

const Monitor: FC = () => {
  return (
    <Layout title={"monitor"}>
      <MonitorComponent />
    </Layout>
  );
};

export default Monitor;