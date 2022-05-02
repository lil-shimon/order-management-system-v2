/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchProduct } from "../../hooks/useQueryProducts";
import { JITAN_TYPE } from "../../utils/product";
import { Product } from "../../types/types";
import { Layout } from "../../components/Layout";
import { ProductComponent } from "../../components/templete/Product";

const Jitan: NextPage = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Product[]>("jitans");

  return (
    <Layout title={"jitan"}>
      <ProductComponent data={data} />
    </Layout>
  );
};

export default Jitan;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery("jitans", () => fetchProduct(JITAN_TYPE));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};