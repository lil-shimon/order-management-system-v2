/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { FC } from "react";
import { Layout } from "../../components/Layout";
import { DocumentComponent } from "../../components/templete/Document";

const Document: FC = () => {
  return (
    <Layout title={"document"}>
      <DocumentComponent />
    </Layout>
  );
};

export default Document;