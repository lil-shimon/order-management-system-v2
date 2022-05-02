/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchProduct } from "../../hooks/useQueryProducts";
import { MEASUREMENT_TYPE } from "../../utils/product";
import { ProductComponent } from "../../components/templete/Product";
import { Product } from "../../types/types";

const Measurement: NextPage = () => {

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Product[]>("measurements");

  return (
    <Layout title={"measurement"}>
      <ProductComponent data={data} />
    </Layout>
  );
};
export default Measurement;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery("measurements", () => fetchProduct(MEASUREMENT_TYPE));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};