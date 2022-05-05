/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { request } from "graphql-request";
import { UserRes } from "../types/types";
import { GET_USERS } from "../queries/queries";
import { endpoint } from "../utils/api";

export const fetchUsers = async () => {
  // @ts-ignore
  const { users: data } = await request<UserRes>(endpoint, GET_USERS);
  return data;
};