/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { ProductListMemo } from "../../organisms/Products/list";
import { ProductProps } from "../../../types/types";

export const ProductComponent: FC<ProductProps> = ({ data }) => {

  return (
    <DocumentPageLayout>
      <ProductListMemo data={data} />
    </DocumentPageLayout>
  );
};