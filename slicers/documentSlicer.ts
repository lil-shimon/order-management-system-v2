/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { EditProduct, Sidenav } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../selector/store";

export interface DocumentState {
  sidenav: Sidenav[];
  monitor: EditProduct;
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
};

export const documentSlice = createSlice({
  name: "document", initialState, reducers: {
    setSidenav: (state, action: PayloadAction<Sidenav[]>) => {
      state.sidenav = action.payload;
    },
    setMonitor: (state, action: PayloadAction<EditProduct>) => {
      state.monitor = action.payload;
    },
    resetProduct: (state) => {
      state.monitor = initialState.monitor;
    },
  },
});

export const {
  setSidenav,
  setMonitor,
  resetProduct,
} = documentSlice.actions;

export const sidenavState = (state: RootState) => state.document.sidenav;
export const monitorState = (state: RootState) => state.document.monitor;

export default documentSlice.reducer;
