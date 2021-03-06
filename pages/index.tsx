import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/Layout";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchNews } from "../hooks/useQueryNews";
import { News } from "../types/types";
import { Auth } from "../components/organisms/Auth";

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  // dehydrateでcacheに保存されていたデータを注入する
  const data = queryClient.getQueryData<News[]>("news");
  return (
    <Layout title={"Home"}>
      <Auth />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery("news", fetchNews);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};