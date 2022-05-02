/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

export const getProductTypeFromTypeId = (typeId: string) => {
  if (typeId === "55793ba1-c771-4e35-bb37-3db1f9f76683") return "monitors";
  else return "products";
};

export const getPageUrlByTypeId = (typeId: string) => {
  if (typeId === MONITOR_TYPE) return "/monitor";
  else return "/document";
};

export const MONITOR_TYPE = "55793ba1-c771-4e35-bb37-3db1f9f76683";