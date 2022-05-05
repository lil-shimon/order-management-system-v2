/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { CompanyListMemo } from "../../organisms/Companies";
import { CompanyProps } from "../../../types/types";

const CompanyComponent: FC<CompanyProps> = ({ data }) => {

  return (
    <DocumentPageLayout>
      <CompanyListMemo data={data} />
    </DocumentPageLayout>
  );
};

export const CompanyComponentMemo = memo(CompanyComponent);