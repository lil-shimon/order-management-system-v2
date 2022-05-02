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

export interface Product {
  id: string;
  product_id: number;
  m_product_type_id: string;
  name: string;
  unit: string;
  unit_price: number;
  note?: string | null;
  created_at: string;
  updated_at: string;
}

export type EditProduct = Pick<Product, "id" | "m_product_type_id" | "name" | "unit" | "unit_price" | "note">

export interface ProductProps {
  data?: Product[];
}