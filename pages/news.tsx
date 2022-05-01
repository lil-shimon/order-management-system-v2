import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/Layout";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchNews } from "../hooks/useQueryNews";
import { News } from "../types/types";
import { Auth } from "../components/organisms/Auth";

const News: NextPage = () => {
  const queryClient = useQueryClient();
  // dehydrateでcacheに保存されていたデータを注入する
  const data = queryClient.getQueryData<News[]>("news");
  return (
    <Layout title={"Home"}>
      <p className={"mb-5 text-blue-500 text-xl"}>News list by SSG</p>
      {data?.map((news) => (
        <p
          className={"font-bold"}
          key={news.id}
        >
          {news.content}
        </p>
      ))}
      <Auth />
    </Layout>
  );
};

export default News;

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