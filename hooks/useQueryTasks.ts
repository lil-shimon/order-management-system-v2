/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GraphQLClient} from "graphql-request";
import { useQuery } from "react-query";
import Cookie from "universal-cookie";
import { Task } from "../types/types";
import { GET_TASKS } from "../queries/queries";
import { useEffect } from "react";

const cookie = new Cookie()
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT

let graphQLClient: GraphQLClient

interface TasksRes {
  tasks: Task[]
}

const fetchTasks = async () => {
  // jwt tokenのheaderを使用して取得する場合はgraphQLClientを使う
  const { tasks:  data} = await graphQLClient.request<TasksRes>(GET_TASKS)
  return data
}

export const useQueryTasks = () => {
  useEffect(() => {
    //@ts-ignore
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`
      }
    })
  }, [cookie.get('token')]);

  return useQuery<Task[], Error>({
    queryKey: "tasks",
    queryFn: fetchTasks,
    staleTime: 0
  })
}