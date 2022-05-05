/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { EditCompany, EditLogo, EditPostage, EditProduct, Sidenav } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../selector/store";
import { JITAN_TYPE, MEASUREMENT_TYPE, OTHER_TYPE } from "../utils/product";

export interface DocumentState {
  sidenav: Sidenav[];
  monitor: EditProduct;
  measurement: EditProduct;
  jitan: EditProduct;
  other: EditProduct;
  logo: EditLogo;
  postage: EditPostage;
  company: EditCompany;
}

const initialState: DocumentState = {
  sidenav: [
    { name: "Quotation", href: "/document" },
    { name: "Monitors", href: "/monitor" },
    { name: "Measurements", href: "/measurement" },
    { name: "JITAN", href: "/jitan" },
    { name: "Postage", href: "/postage" },
    { name: "Logo", href: "/logo" },
    { name: "Companies", href: "/company" },
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
  logo: {
    name: "",
    src: "",
  },
  postage: {
    id: "",
    from: "",
    to: "",
    size: "",
    price: 0,
  },
  company: {
    id: "",
    name: "",
    address: "",
    phone: "",
    due: "",
    cycle: "",
    receive_way: "",
    transfer_way: "",
    date: "",
    note: "",
    invoice: "",
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
    setLogo: (state, action: PayloadAction<EditLogo>) => {
      state.logo = action.payload;
    },
    resetLogo: (state) => {
      state.logo = initialState.logo;
    },
    setPostage: (state, action: PayloadAction<EditPostage>) => {
      state.postage = action.payload;
    },
    resetPostage: (state) => {
      state.postage = initialState.postage;
    },
    setCompany: (state, action: PayloadAction<EditCompany>) => {
      state.company = action.payload;
    },
    resetCompany: (state) => {
      state.company = initialState.company;
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
  setLogo,
  resetLogo,
  setPostage,
  resetPostage,
  setCompany,
  resetCompany,
} = documentSlice.actions;

export const sidenavState = (state: RootState) => state.document.sidenav;
export const monitorState = (state: RootState) => state.document.monitor;
export const measurementState = (state: RootState) => state.document.measurement;
export const jitanState = (state: RootState) => state.document.jitan;
export const otherState = (state: RootState) => state.document.other;
export const logoState = (state: RootState) => state.document.logo;
export const postageState = (state: RootState) => state.document.postage;
export const companyState = (state: RootState) => state.document.company;

export default documentSlice.reducer;
