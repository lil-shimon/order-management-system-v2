/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useQueryClient, useMutation } from "react-query";
import Cookie from "universal-cookie";
import {
  CREATE_NEWS, UPDATE_NEWS, DELETE_NEWS,
} from "../queries/queries";
import { GraphQLClient } from "graphql-request";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { EditNews, News } from "../types/types";
import { resetEditedNews } from "../slicers/uiSlice";

const cookie = new Cookie();

let endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;
let graphQLClient: GraphQLClient;

export const useNewsMutation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    //@ts-ignore
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });
  }, [cookie.get("token")]);

  const createNewsMutation = useMutation((content: string) => graphQLClient.request(CREATE_NEWS, { content: content }), {
    onSuccess: (res) => {
      const prev = queryClient.getQueryData<News[]>("news");
      if (prev) {
        queryClient.setQueryData<News[]>("news", [...prev, res.insert_news_one]);
      }
      dispatch(resetEditedNews());
    },
  });

  const updateNewsMutation = useMutation((news: EditNews) => graphQLClient.request(UPDATE_NEWS, news), {
    onSuccess: (res, variables) => {
      const prev = queryClient.getQueryData<News[]>("news");
      if (prev) {
        queryClient.setQueryData<News[]>("news", prev.map((news) => news.id === variables.id ? res.update_news_by_pk : news));
      }
      dispatch(resetEditedNews());
    },
  });

  const deleteNewsMutation = useMutation((id: string) => graphQLClient.request(DELETE_NEWS, { id: id }), {
    onSuccess: (res, variables) => {
      const prev = queryClient.getQueryData<News[]>("news");
      if (prev) {
        queryClient.setQueryData<News[]>("news", prev.filter((news) => news.id !== variables));
      }
      dispatch(resetEditedNews())
    },
  });
};