/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

export const DUE_OPTIONS = [
  { id: 1, name: "15日" },
  { id: 2, name: "20日" },
  { id: 3, name: "25日" },
  { id: 4, name: "月末" },
];

export const CYCLE_OPTIONS = [
  { id: 1, name: "翌月" },
  { id: 2, name: "翌々月" },
  { id: 3, name: "その他(メモに記載)" },
];

export const RECEIVE_WAY_OPTIONS = [
  { id: 1, name: "口座振込" },
  { id: 2, name: "その他(メモに記載)" },
];

export const TRANSFER_WAY_OPTIONS = [
  { id: 1, name: "メール" },
  { id: 2, name: "郵送" },
  { id: 3, name: "FAX" },
  { id: 4, name: "その他" },
];

export const INVOICE_OPTIONS = [
  { id: 1, name: "クェスタ指定請求書(freee)" },
  { id: 2, name: "先方指定請求書納品書" },
  { id: 3, name: "その他" },
];