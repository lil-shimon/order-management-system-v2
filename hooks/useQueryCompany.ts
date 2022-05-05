/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { request } from "graphql-request";
import { Company, EditCompany } from "../types/types";
import { endpoint } from "../utils/api";
import { GET_COMPANIES } from "../queries/queries";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { resetCompany, setCompany } from "../slicers/documentSlicer";

interface CompanyRes {
  companies: Company[];
}

export const fetchCompany = async () => {
  // @ts-ignore
  const { companies: data } = await request<CompanyRes>(endpoint, GET_COMPANIES);
  return data;
};

export const useQueryCompany = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleMoveToCreate = () => {
    dispatch(resetCompany());
    router.push("/company/create");
  };

  const handleMoveToEdit = (data: EditCompany) => {
    dispatch(setCompany(data));
    router.push(`/company/${data.id}`);
  };

  return {
    handleMoveToCreate,
    handleMoveToEdit,
  };
};