/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { Postage } from "../types/types";
import { endpoint } from "../utils/api";
import { request } from "graphql-request";
import { GET_POSTAGES } from "../queries/queries";

interface PostageRes {
  postages: Postage[];
}

export const fetchPostage = async () => {
  // @ts-ignore
  const { postages: data } = await request<PostageRes>(endpoint, GET_POSTAGES);
  return data;
};