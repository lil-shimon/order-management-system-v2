/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { Layout } from "../../components/Layout";
import { CompanyCreateMemo } from "../../components/templete/Company/Create";

const CompanyShow: FC = () => {
  return (
    <Layout title={"company"}>
      <CompanyCreateMemo />
    </Layout>
  );
};

export default CompanyShow;