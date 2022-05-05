/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { FC } from "react";
import { Layout } from "../../components/Layout";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchDocument } from "../../hooks/useQueryDocument";
import { DocumentComponentMemo } from "../../components/templete/Document";
import { Document } from "../../types/types";

const Document: FC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Document[]>("documents");
  return (
    <Layout title={"document"}>
      <DocumentComponentMemo data={data} />
    </Layout>
  );
};

export default Document;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery<Document[]>("documents", fetchDocument);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};