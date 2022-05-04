/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { Postage } from "../../types/types";
import { fetchPostage } from "../../hooks/useQueryPostage";
import { PostageComponentMemo } from "../../components/templete/Postage";

const Postage: NextPage = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Postage[]>("postages");
  return (
    <Layout title={"postage"}>
      <PostageComponentMemo data={data} />
    </Layout>
  );
};

export default Postage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery<Postage[]>("postages", fetchPostage);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};