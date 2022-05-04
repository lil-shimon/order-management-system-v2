/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { LogoComponentMemo } from "../../components/templete/Logo";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchLogo } from "../../hooks/useQueryLogo";
import { Logo } from "../../types/types";

const Logo: NextPage = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Logo[]>("logos");

  return (
    <Layout title={"logo"}>
      <LogoComponentMemo data={data}/>
    </Layout>
  );
};

export default Logo;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery("logos", fetchLogo);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};