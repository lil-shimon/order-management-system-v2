/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentListMemo } from "../../organisms/Documents/list";
import { DocumentPageLayout } from "./Layout";
import { DocumentProps } from "../../../types/types";

const DocumentComponent: FC<DocumentProps> = ({ data }) => {

  return (
    <DocumentPageLayout>
      <DocumentListMemo data={data} />
    </DocumentPageLayout>
  );
};

export const DocumentComponentMemo = memo(DocumentComponent);