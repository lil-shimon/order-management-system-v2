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
  note?: string;
  created_at: string;
  updated_at: string;
}

export type EditProduct = Pick<Product, "id" | "m_product_type_id" | "name" | "unit" | "unit_price" | "note">

export interface ProductProps {
  data?: Product[];
}

export interface Logo {
  id: string;
  name: string;
  src: string;
}

export interface LogoProps {
  data?: Logo[];
}

export type EditLogo = Pick<Logo, "name" | "src">

export interface Postage {
  id: string;
  from: string;
  to: string;
  size: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export type EditPostage = Pick<Postage, "id" | "from" | "to" | "size" | "price">

export interface PostageProps {
  data?: Postage[];
}

export interface Company {
  id: string;
  name: string;
  address: string;
  phone: string;
  due: string;
  cycle: string;
  receive_way: string;
  transfer_way: string;
  date: string;
  note: string;
  invoice: string;
  created_at: string;
  updated_at: string;
}

export type EditCompany = Omit<Company, "created_at" | "updated_at">

export interface CompanyProps {
  data?: Company[];
}