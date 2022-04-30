/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../slicers/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>