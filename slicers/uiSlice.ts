/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../selector/store";
import { EditNews, EditTask } from "../types/types";

export interface uiState {
  editedTask: EditTask;
  editedNews: EditNews;
  navigation: navigationState[];
}

export interface navigationState {
  name: string;
  href: string;
  current: boolean;
}

const initialState: uiState = {
  editedTask: {
    id: "", title: "",
  }, editedNews: {
    id: "", content: "",
  },
  navigation: [
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Documents", href: "/document", current: false },
    { name: "Orders", href: "/order", current: false },
    { name: "Maintenance", href: "/maintenance", current: false },
  ],
};

export const uiSlice = createSlice({
  name: "ui", initialState, reducers: {
    setEditedTask: (state, action: PayloadAction<EditTask>) => {
      state.editedTask = action.payload;
    }, resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask;
    }, setEditedNews: (state, action: PayloadAction<EditNews>) => {
      state.editedNews = action.payload;
    }, resetEditedNews: (state) => {
      state.editedNews = initialState.editedNews;
    },
    setNavigation: (state, action: PayloadAction<navigationState[]>) => {
      state.navigation = action.payload;
    },
  },
});

export const {
  setEditedTask, resetEditedTask, setEditedNews, resetEditedNews, setNavigation,
} = uiSlice.actions;

export const selectTask = (state: RootState) => state.ui.editedTask;
export const selectNews = (state: RootState) => state.ui.editedNews;
export const navigationState = (state: RootState) => state.ui.navigation;

export default uiSlice.reducer;