/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { DocumentListMemo } from "../../organisms/Documents/list";
import { DocumentPageLayout } from "./Layout";

export const DocumentComponent: FC = () => {

  return (
    <DocumentPageLayout>
      <DocumentListMemo />
    </DocumentPageLayout>
  );
};
