/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchProduct } from "../../hooks/useQueryProducts";
import { Product } from "../../types/types";
import { MonitorComponent } from "../../components/templete/Monitor";

const Monitor: NextPage = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Product[]>("monitors");
  return (
    <Layout title={"monitor"}>
      <MonitorComponent data={data} />
    </Layout>
  );
};

export default Monitor;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const typeId = "55793ba1-c771-4e35-bb37-3db1f9f76683";
  await queryClient.fetchQuery("monitors", () => fetchProduct(typeId));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};
