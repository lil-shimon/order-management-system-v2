/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { Layout } from "../../components/Layout";
import { DocumentCreateComponentMemo } from "../../components/templete/Document/Create";

const DocumentCreate: FC = () => {
  return (
    <Layout title={"document"}>
      <DocumentCreateComponentMemo />
    </Layout>
  );
};

export default DocumentCreate;