/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { useSelector } from "react-redux";
import { ProductFormScreenMemo } from "../../organisms/Products/FormScreen";
import { measurementState } from "../../../slicers/documentSlicer";

const MeasurementCreateComponent: FC = () => {

  const measurement = useSelector(measurementState);
  return (
    <DocumentPageLayout>
      <ProductFormScreenMemo product={measurement} />
    </DocumentPageLayout>
  );
};

export const MeasurementCreateComponentMemo = memo(MeasurementCreateComponent);
