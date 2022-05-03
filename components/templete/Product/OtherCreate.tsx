/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useSelector } from "react-redux";
import { otherState } from "../../../slicers/documentSlicer";
import { DocumentPageLayout } from "../Document/Layout";
import { ProductFormScreenMemo } from "../../organisms/Products/FormScreen";
import { memo } from "react";

const OtherCreateComponent = () => {
  const other = useSelector(otherState)

  return (
    <DocumentPageLayout>
      <ProductFormScreenMemo product={other} />
    </DocumentPageLayout>
  )
}

export const OtherCreateComponentMemo = memo(OtherCreateComponent)