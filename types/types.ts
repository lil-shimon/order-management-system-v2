/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

export interface News {
  id: string;
  content: string;
  created_at: string;
}

export type EditNews = Pick<News, "id" | "content">

export interface Task {
  id: string;
  title: string;
  created_at: string;
  user_id: string;
}

export type EditTask = Pick<Task, "id" | "title">

export interface NavigationState {
  name: string;
  href: string;
  current: boolean;
}

export type Sidenav = Pick<NavigationState, "name" | "href">