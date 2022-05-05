/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { EditPostage, Postage } from "../types/types";
import { graphQLClient, GraphQLSetHeader } from "../utils/api";
import { CREATE_POSTAGE, UPDATE_POSTAGE } from "../queries/queries";
import { resetPostage } from "../slicers/documentSlicer";

export const usePostageMutation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  GraphQLSetHeader();

  const createPostageMutation = useMutation((postage: EditPostage) => graphQLClient.request(CREATE_POSTAGE, {
    from: postage.from,
    to: postage.to,
    size: postage.size,
    price: postage.price,
  }), {
    onSuccess: (res) => {
      const prev = queryClient.getQueryData<Postage[]>("postages");
      if (prev)
        queryClient.setQueriesData<Postage[]>("postages", [...prev, res.insert_postages_one]);
      dispatch(resetPostage());
    },
    onError: () => {
      alert("Error");
    },
  });

  const updatePostageMutation = useMutation((postage: EditPostage) => graphQLClient.request(UPDATE_POSTAGE, {
    id: postage.id,
    from: postage.from,
    to: postage.to,
    size: postage.size,
    price: postage.price,
  }), {
    onSuccess: (res, variables) => {
      const prev = queryClient.getQueryData<Postage[]>("postages");
      if (prev)
        queryClient.setQueryData<Postage[]>("postages", prev.map((postage) => postage.id === variables.id ? res.update_postages_by_pk : postage));
      dispatch(resetPostage());
    },
    onError: () => {
      alert("Error");
    },
  });

  return {
    createPostageMutation,
    updatePostageMutation,
  };
};