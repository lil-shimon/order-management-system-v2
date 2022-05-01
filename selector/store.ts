/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../slicers/uiSlice";
import documentReducer from "../slicers/documentSlicer"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    document: documentReducer
  },
});

export type RootState = ReturnType<typeof store.getState>