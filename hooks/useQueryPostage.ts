/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { Postage } from "../types/types";
import { endpoint } from "../utils/api";
import { request } from "graphql-request";
import { GET_POSTAGES } from "../queries/queries";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetPostage } from "../slicers/documentSlicer";

interface PostageRes {
  postages: Postage[];
}

export const fetchPostage = async () => {
  // @ts-ignore
  const { postages: data } = await request<PostageRes>(endpoint, GET_POSTAGES);
  return data;
};

export const useQueryPostage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleMoveToCreate = () => {
    dispatch(resetPostage());
    router.push("/postage/create");
  };

  return {
    handleMoveToCreate,
  };
};