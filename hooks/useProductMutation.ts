/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { graphQLClient, GraphQLSetHeader } from "../utils/api";
import { resetProduct, setMonitor } from "../slicers/documentSlicer";
import { EditProduct, Product } from "../types/types";
import { CREATE_PRODUCT } from "../queries/queries";
import { getProductTypeFromTypeId } from "../utils/product";

export const useProductMutation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  GraphQLSetHeader();

  const handleChangeValue = (key: string, value: HTMLInputElement, data: EditProduct) => {
    dispatch(setMonitor({ ...data, [key]: value }));
  };

  const createProductMutation = useMutation((product: EditProduct) => graphQLClient.request(CREATE_PRODUCT, {
    m_product_type_id: product.m_product_type_id,
    name: product.name,
    note: product.note,
    unit: product.unit,
    unit_price: product.unit_price,
  }), {
    onSuccess: (res) => {
      const productType = getProductTypeFromTypeId(res.insert_products_one.m_product_type_id);
      const prev = queryClient.getQueryData<Product[]>(productType);
      if (prev)
        queryClient.setQueriesData<Product[]>(productType, [...prev, res.insert_products_one]);
      dispatch(resetProduct());
    },
    onError: () => {
      dispatch(resetProduct());
    },
  });

  return {
    handleChangeValue,
    createProductMutation,
  };
};