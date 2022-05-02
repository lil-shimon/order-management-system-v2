/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { resetMeasurement, resetMonitor, setMeasurement, setMonitor } from "../slicers/documentSlicer";

export const getProductTypeFromTypeId = (typeId: string) => {
  if (typeId === "55793ba1-c771-4e35-bb37-3db1f9f76683") return "monitors";
  else return "products";
};

export const getPageUrlByTypeId = (typeId: string) => {
  if (typeId === MONITOR_TYPE) return "/monitor";
  if (typeId === MEASUREMENT_TYPE) return "/measurement";
  else return "/document";
};

export const getProductStateHandler = (typeId: string) => {
  return typeId === MONITOR_TYPE ? setMonitor
    : setMeasurement;
};

export const resetProductHanlder = (typeId: string) => {
  return typeId === MONITOR_TYPE ? resetMonitor()
    : resetMeasurement();
};

export const MONITOR_TYPE = "55793ba1-c771-4e35-bb37-3db1f9f76683";
export const MEASUREMENT_TYPE = "4df08462-1fc8-44c0-9662-74249f55cf1d";
export const JITAN_TYPE = "83e4c2b8-6853-449c-b86a-7a78f87b9c9d"
export const OTHER_TYPE = "348bc3e8-52bc-474e-984a-a7422d589dca"