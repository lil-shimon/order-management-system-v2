/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { Company } from "../../types/types";
import { fetchCompany } from "../../hooks/useQueryCompany";
import { CompanyComponentMemo } from "../../components/templete/Company";

const Company: NextPage = () => {

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Company[]>("companies");

  return (
    <Layout title={"company"}>
      <CompanyComponentMemo data={data} />
    </Layout>
  );
};

export default Company;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery<Company[]>("companies", fetchCompany);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};