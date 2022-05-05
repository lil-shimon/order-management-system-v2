/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { graphQLClient, GraphQLSetHeader } from "../utils/api";
import { Company, EditCompany } from "../types/types";
import { CREATE_COMPANY, UPDATE_COMPANY } from "../queries/queries";
import { resetCompany } from "../slicers/documentSlicer";

export const useCompanyMutation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  GraphQLSetHeader();

  const createCompanyMutation = useMutation((company: EditCompany) => graphQLClient.request(CREATE_COMPANY, {
    address: company.address,
    cycle: company.cycle,
    date: company.date,
    due: company.due,
    name: company.name,
    phone: company.phone,
    receive_way: company.receive_way,
    transfer_way: company.transfer_way,
    note: company.note,
  }), {
    onSuccess: (res) => {
      const prev = queryClient.getQueryData<Company[]>("companies");
      if (prev)
        queryClient.setQueriesData<Company[]>("companies", [...prev, res.insert_companies_one]);
      dispatch(resetCompany());
    },
    onError: () => {
      alert("Error");
    },
  });

  const updateCompanyMutation = useMutation((company: EditCompany) => graphQLClient.request(UPDATE_COMPANY, {
    id: company.id,
    address: company.address,
    cycle: company.cycle,
    date: company.date,
    due: company.due,
    name: company.name,
    phone: company.phone,
    receive_way: company.receive_way,
    transfer_way: company.transfer_way,
    note: company.note,
  }), {
    onSuccess: (res, variables) => {
      const prev = queryClient.getQueryData<Company[]>("companies");
      if (prev)
        queryClient.setQueriesData<Company[]>("companies", prev.map((company) => company.id === variables.id ? res.update_companies_by_pk : company));
      dispatch(resetCompany());
    },
    onError: () => {
      alert("Error");
    },
  });

  return {
    createCompanyMutation,
    updateCompanyMutation,
  };
};