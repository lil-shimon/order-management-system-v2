/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

export const getProductTypeFromTypeId = (typeId: string) => {
  if (typeId === "55793ba1-c771-4e35-bb37-3db1f9f76683") return "monitors";
  else return "products";
};