/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { graphQLClient, GraphQLSetHeader } from "../utils/api";
import { useMutation, useQueryClient } from "react-query";
import { EditUser, User } from "../types/types";
import { CREATE_USER, UPDATE_USER } from "../queries/queries";
import { useDispatch } from "react-redux";
import { resetUser } from "../slicers/documentSlicer";

export const useUserMutation = () => {
  GraphQLSetHeader();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const createUserMutation = useMutation((user: EditUser) => graphQLClient.request(CREATE_USER, {
    name: user.name,
  }), {
    onSuccess: (res) => {
      const prev = queryClient.getQueryData<User[]>("users");
      if (prev)
        queryClient.setQueriesData<User[]>("users", [...prev, res.insert_users_one]);
      dispatch(resetUser());
    },
    onError: () => {
      alert("Error");
    },
  });

  const updateUserMutation = useMutation((user: EditUser) => graphQLClient.request(UPDATE_USER, {
      id: user.id,
      name: user.name,
    }), {
      onSuccess: (res, variables) => {
        const prev = queryClient.getQueryData<User[]>("users");
        if (prev)
          queryClient.setQueriesData<User[]>("users", prev.map((user) => user.id === variables.id ? res.update_users_by_pk : user));
      },
      onError: () => {
        alert("Error");
      },
    },
  );

  return {
    createUserMutation,
    updateUserMutation,
  };
};