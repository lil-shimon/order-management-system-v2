/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { Product } from "../types/types";
import { GET_PRODUCTS_BY_TYPE } from "../queries/queries";
import { graphQLClient, GraphQLSetHeader } from "../utils/api";
import { useQuery } from "react-query";

interface ProductRes {
  products: Product[];
}

const fetchProduct = async (typeId: string) => {
  const { products: data } = await graphQLClient.request<ProductRes>(GET_PRODUCTS_BY_TYPE, { m_product_type_id: typeId });
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