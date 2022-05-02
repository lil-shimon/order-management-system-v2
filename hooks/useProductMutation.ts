/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { graphQLClient, GraphQLSetHeader } from "../utils/api";
import { resetMonitor, setMonitor } from "../slicers/documentSlicer";
import { EditProduct, Product } from "../types/types";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../queries/queries";
import { getProductTypeFromTypeId, resetProductHanlder } from "../utils/product";

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
      dispatch(resetProductHanlder(res.insert_products_one.m_product_type_id));
    },
    onError: () => {
      alert("Error");
    },
  });

  const updateProductMutation = useMutation((product: EditProduct) => graphQLClient.request(UPDATE_PRODUCT, {
      id: product.id,
      m_product_type_id: product.m_product_type_id,
      name: product.name,
      note: product.note,
      unit: product.unit,
      unit_price: product.unit_price,
    }), {
      onSuccess: (res, variables) => {
        const productType = getProductTypeFromTypeId(variables.m_product_type_id);
        const prev = queryClient.getQueryData<Product[]>(productType);
        if (prev)
          queryClient.setQueryData<Product[]>(productType, prev.map((product) => product.id === variables.id ? res.update_product_by_ok : product));
      },
    },
  );

  return {
    handleChangeValue,
    createProductMutation,
    updateProductMutation,
  };
};