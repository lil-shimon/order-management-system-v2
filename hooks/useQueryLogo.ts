/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { Logo } from "../types/types";
import { request } from "graphql-request";
import { endpoint } from "../utils/api";
import { GET_LOGOS } from "../queries/queries";

interface LogoRes {
  logos: Logo[];
}

export const fetchLogo = async () => {
  //@ts-ignore
  const { logos: data } = await request<LogoRes>(endpoint, GET_LOGOS);
  return data;
};
