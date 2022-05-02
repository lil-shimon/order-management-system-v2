/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { EditProduct, Sidenav } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../selector/store";
import { JITAN_TYPE, MEASUREMENT_TYPE, OTHER_TYPE } from "../utils/product";

export interface DocumentState {
  sidenav: Sidenav[];
  monitor: EditProduct;
  measurement: EditProduct;
  jitan: EditProduct;
  other: EditProduct;
}

const initialState: DocumentState = {
  sidenav: [
    { name: "Quotation", href: "/document" },
    { name: "Monitors", href: "/monitor" },
    { name: "Measurements", href: "/measurement" },
    { name: "JITAN", href: "/jitan" },
    { name: "Postage", href: "/postage" },
    { name: "Logo", href: "/logo" },
    { name: "Others", href: "/other" },
  ],
  monitor: {
    id: "",
    m_product_type_id: "55793ba1-c771-4e35-bb37-3db1f9f76683",
    name: "",
    unit: "",
    unit_price: 0,
    note: "",
  },
  measurement: {
    id: "",
    m_product_type_id: MEASUREMENT_TYPE,
    name: "",
    unit: "",
    unit_price: 0,
    note: "",
  },
  jitan: {
    id: "",
    m_product_type_id: JITAN_TYPE,
    name: "",
    unit: "",
    unit_price: 0,
    note: "",
  },
  other: {
    id: "",
    m_product_type_id: OTHER_TYPE,
    name: "",
    unit: "",
    unit_price: 0,
    note: "",
  },
};

export const documentSlice = createSlice({
  name: "document", initialState, reducers: {
    setSidenav: (state, action: PayloadAction<Sidenav[]>) => {
      state.sidenav = action.payload;
    },
    setMonitor: (state, action: PayloadAction<EditProduct>) => {
      state.monitor = action.payload;
    },
    resetMonitor: (state) => {
      state.monitor = initialState.monitor;
    },
    setMeasurement: (state, action: PayloadAction<EditProduct>) => {
      state.measurement = action.payload;
    },
    resetMeasurement: (state) => {
      state.measurement = initialState.measurement;
    },
    setJitan: (state, action: PayloadAction<EditProduct>) => {
      state.jitan = action.payload;
    },
    resetJitan: (state) => {
      state.jitan = initialState.jitan;
    },
    setOther: (state, action: PayloadAction<EditProduct>) => {
      state.other = action.payload;
    },
    resetOther: (state) => {
      state.other = initialState.other;
    },
  },
});

export const {
  setSidenav,
  setMonitor,
  resetMonitor,
  setMeasurement,
  resetMeasurement,
  setJitan,
  resetJitan,
  setOther,
  resetOther,
} = documentSlice.actions;

export const sidenavState = (state: RootState) => state.document.sidenav;
export const monitorState = (state: RootState) => state.document.monitor;
export const measurementState = (state: RootState) => state.document.measurement;
export const jitanState = (state: RootState) => state.document.jitan;
export const otherState = (state: RootState) => state.document.other;

export default documentSlice.reducer;
