/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { DocumentPageLayout } from "../Document/Layout";
import { ProductFormScreenMemo } from "../../organisms/Products/FormScreen";
import { memo } from "react";
import { monitorState } from "../../../slicers/documentSlicer";
import { useSelector } from "react-redux";

const MonitorCreateComponent = () => {

  const monitor = useSelector(monitorState);

  return (
    <DocumentPageLayout>
      <ProductFormScreenMemo product={monitor} />
    </DocumentPageLayout>
  );
};

export const MonitorCreateComponentMemo = memo(MonitorCreateComponent);