/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { request } from "graphql-request";
import { endpoint } from "../utils/api";
import { GET_DOCUMENTS } from "../queries/queries";

interface DocumentRes {
  documents: Document[];
}

export const fetchDocument = async () => {
  // @ts-ignore
  const { documents: data } = await request<DocumentRes>(endpoint, GET_DOCUMENTS);
  return data;
};