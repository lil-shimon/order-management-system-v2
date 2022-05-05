/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { request } from "graphql-request";
import { EditUser, UserRes } from "../types/types";
import { GET_USERS } from "../queries/queries";
import { endpoint } from "../utils/api";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { resetUser, setUser } from "../slicers/documentSlicer";

export const fetchUsers = async () => {
  // @ts-ignore
  const { users: data } = await request<UserRes>(endpoint, GET_USERS);
  return data;
};

export const useQueryUser = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleMoveToCreate = () => {
    dispatch(resetUser());
    router.push("/user/create");
  };

  const handleMoveToEdit = (data: EditUser) => {
    dispatch(setUser(data));
    router.push(`/user/${data.id}`);
  };

  return {
    handleMoveToCreate,
    handleMoveToEdit,
  };
};