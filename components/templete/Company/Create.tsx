/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { useSelector } from "react-redux";
import { companyState } from "../../../slicers/documentSlicer";
import { CompanyFormScreenMemo } from "../../organisms/Companies/FormScreen";

const CompanyCreate: FC = () => {
  const company = useSelector(companyState);
  return (
    <DocumentPageLayout>
      <CompanyFormScreenMemo company={company} />
    </DocumentPageLayout>
  );
};

export const CompanyCreateMemo = memo(CompanyCreate);