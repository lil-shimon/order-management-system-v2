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
    <>
      {data?.map((news) => (
        <div key={news.id}>
          <ul>
            <NewsItemMemo news={news} />
          </ul>
        </div>
      ))}
    </>
  );
};

export const NewsListMemo = memo(NewsList);