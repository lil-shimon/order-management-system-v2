/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { Product } from "../../types/types";
import { Layout } from "../../components/Layout";
import { ProductComponent } from "../../components/templete/Product";
import { fetchProduct } from "../../hooks/useQueryProducts";
import { OTHER_TYPE } from "../../utils/product";

const Other: NextPage = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Product[]>("others");

  return (
    <Layout title={"other"}>
      <ProductComponent data={data} />
    </Layout>
  );
};

export default Other;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery<Product[]>("others", () => fetchProduct(OTHER_TYPE));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};