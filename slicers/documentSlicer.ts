/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { Sidenav } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../selector/store";

export interface DocumentState {
  sidenav: Sidenav[];
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
};

export const documentSlice = createSlice({
  name: "document", initialState, reducers: {
    setSidenav: (state, action: PayloadAction<Sidenav[]>) => {
      state.sidenav = action.payload;
    },
  },
});

export const {
  setSidenav,
} = documentSlice.actions;

export const sidenavState = (state: RootState) => state.document.sidenav;

export default documentSlice.reducer;
