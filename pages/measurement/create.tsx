/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { Layout } from "../../components/Layout";
import { MeasurementCreateComponentMemo } from "../../components/templete/Product/MeasurementCreate";

const MeasurementCreate = () => {
  return (
    <Layout title={"measurement"}>
      <MeasurementCreateComponentMemo />
    </Layout>
  );
};

export default MeasurementCreate;