/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import Cookie from "universal-cookie";
import { GraphQLClient } from "graphql-request";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { useEffect } from "react";
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "../queries/queries";
import { EditTask, Task } from "../types/types";
import { resetEditedTask } from "../slicers/uiSlice";

const cookie = new Cookie();

let endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;
let graphQLClient: GraphQLClient;

export const useTaskMutation = () => {
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

  const createTaskMutation = useMutation((title: string) => graphQLClient.request(CREATE_TASK, { title: title }), {
    onSuccess: (res) => {
      const prevTodos = queryClient.getQueryData<Task[]>("tasks");
      /// cacheを更新（追加分）
      if (prevTodos) {
        queryClient.setQueriesData("tasks", [...prevTodos, res.insert_tasks_one]);
      }
      dispatch(resetEditedTask());
    },
    onError: () => {
      dispatch(resetEditedTask())
    }
  });

  const updateTaskMutation = useMutation((task: EditTask) => graphQLClient.request(UPDATE_TASK, task), {
    onSuccess: (res, variables) => {
      const prevTodos = queryClient.getQueryData<Task[]>("tasks");
      if (prevTodos) {
        queryClient.setQueryData<Task[]>("tasks", prevTodos.map((task) => task.id === variables.id ? res.update_tasks_by_pk : task));
      }
      dispatch(resetEditedTask());
    },
    onError: () => {
      dispatch(resetEditedTask())
    }
  });

  const deleteTaskMutation = useMutation((id: string) => graphQLClient.request(DELETE_TASK, { id: id }), {
    onSuccess: (res, variables) => {
      const prevTodos = queryClient.getQueryData<Task[]>("tasks");
      if (prevTodos) {
        queryClient.setQueryData<Task[]>("tasks", prevTodos.filter((task) => task.id !== variables));
      }
      dispatch(resetEditedTask());
    },
  });

  return {
    createTaskMutation, updateTaskMutation, deleteTaskMutation,
  };
};