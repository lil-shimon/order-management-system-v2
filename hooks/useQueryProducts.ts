/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { Product } from "../types/types";
import { GET_PRODUCT_BY_ID, GET_PRODUCTS_BY_TYPE } from "../queries/queries";
import { endpoint } from "../utils/api";
import { request } from "graphql-request";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getProductStateHandler, resetProductHandler } from "../utils/product";
import { resetJitan, resetMeasurement, resetMonitor, resetOther } from "../slicers/documentSlicer";

interface ProductRes {
  products: Product[];
}

interface ProductByIdRes {
  product: Product;
}

export const fetchProduct = async (typeId: string) => {
  // @ts-ignore
  const { products: data } = await request<ProductRes>(endpoint, GET_PRODUCTS_BY_TYPE, { m_product_type_id: typeId });
  return data;
};

export const fetchProductById = async (typeId: string, id: string) => {
  // @ts-ignore
  const { product: data } = await request<ProductByIdRes>(endpoint, GET_PRODUCT_BY_ID, {
    m_product_type_id: typeId,
    id: id,
  });
  return data;
};

export const useQueryProducts = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const currentUrl = router.pathname;

  const handleMoveToCreatePage = () => {
    dispatch(resetMonitor());
    dispatch(resetMeasurement());
    dispatch(resetJitan());
    dispatch(resetOther());
    router.push(`${currentUrl}/create`);
  };

  const handleMoveToEditPage = (data: Product) => {
    const setProduct = getProductStateHandler(data.m_product_type_id);
    dispatch(setProduct(data));
    router.push(`${currentUrl}/${data.id}`);
  };

  return {
    handleMoveToEditPage,
    currentUrl,
    handleMoveToCreatePage,
  };
};