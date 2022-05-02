/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { jitanState } from "../../../slicers/documentSlicer";
import { DocumentPageLayout } from "../Document/Layout";
import { ProductFormScreenMemo } from "../../organisms/Products/FormScreen";

const JitanCreateComponent: FC = () => {
  const jitan = useSelector(jitanState)

  return (
    <DocumentPageLayout>
      <ProductFormScreenMemo product={jitan} />
    </DocumentPageLayout>
  )
}

export const JitanCreateComponentMemo = memo(JitanCreateComponent)