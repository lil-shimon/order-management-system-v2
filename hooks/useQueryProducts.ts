/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { Product } from "../types/types";
import { GET_PRODUCTS_BY_TYPE } from "../queries/queries";
import { endpoint, graphQLClient, GraphQLSetHeader } from "../utils/api";
import { useQuery } from "react-query";
import { request } from "graphql-request";

interface ProductRes {
  products: Product[];
}

export const fetchProduct = async (typeId: string) => {
  // @ts-ignore
  const { products: data } = await request<ProductRes>(endpoint, GET_PRODUCTS_BY_TYPE, { m_product_type_id: typeId });
  return data;
};

export const useQueryProducts = (typeId: string) => {
  GraphQLSetHeader();

  return useQuery<Product[], Error>({
    queryKey: "products",
    queryFn: () => fetchProduct(typeId),
    staleTime: 0,
  });
};