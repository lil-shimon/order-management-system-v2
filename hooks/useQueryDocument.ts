/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { request } from "graphql-request";
import { endpoint } from "../utils/api";
import { GET_DOCUMENTS } from "../queries/queries";
import { Document, EditDocument } from "../types/types";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { resetDocument, setDocument } from "../slicers/documentSlicer";

interface DocumentRes {
  documents: Document[];
}

export const fetchDocument = async () => {
  // @ts-ignore
  const { documents: data } = await request<DocumentRes>(endpoint, GET_DOCUMENTS);
  return data;
};

export const useQueryDocument = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleMoveToCreate = () => {
    dispatch(resetDocument())
    router.push("/document/create")
  }

  const handleMoveToEdit = (data: EditDocument) => {
    dispatch(setDocument(data))
    router.push(`/document/${data.id}`)
  }

  return {
    handleMoveToCreate,
    handleMoveToEdit
  }
}