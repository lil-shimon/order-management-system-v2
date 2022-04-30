/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { FC, memo } from "react";
import { useQueryNews } from "../hooks/useQueryNews";
import { NewsItemMemo } from "./NewsItem";

const NewsList: FC = () => {
  const { status, data } = useQueryNews();

  if (status === "loading") return <div>...loading</div>;
  if (status === "error") return <div>Error</div>;

  return (
    <ul>
      {data?.map((news) => (
        <NewsItemMemo news={news} key={news.id}/>
      ))}
    </ul>
  );
};

export const NewsListMemo = memo(NewsList);