/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { MonitorListMemo } from "../../organisms/Monitors/list";
import { ProductProps } from "../../../types/types";

export const MonitorComponent: FC<ProductProps> = ({ data }) => {

  return (
    <DocumentPageLayout>
      <MonitorListMemo data={data} />
    </DocumentPageLayout>
  );
};