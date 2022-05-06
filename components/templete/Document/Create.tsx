/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { documentState } from "../../../slicers/documentSlicer";
import { DocumentPageLayout } from "./Layout";
import { DocumentFormScreenMemo } from "../../organisms/Documents/FormScreen";

const DocumentCreateComponent: FC = () => {
  const document = useSelector(documentState);

  return (
    <DocumentPageLayout>
      <DocumentFormScreenMemo document={document} />
    </DocumentPageLayout>
  )
};

export const DocumentCreateComponentMemo = memo(DocumentCreateComponent)