/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { FC } from "react";
import { Layout } from "../../components/Layout";
import { DocumentComponent } from "../../components/templete/Document";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchDocument } from "../../hooks/useQueryDocument";

const Document: FC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Document[]>("documents");
  console.log("data", data);
  return (
    <Layout title={"document"}>
      <DocumentComponent />
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