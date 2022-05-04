/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { useSelector } from "react-redux";
import { logoState } from "../../../slicers/documentSlicer";
import { LogoFormScreenMemo } from "../../organisms/Logo/FormScreen";

const LogoCreateComponent: FC = () => {
  const logo = useSelector(logoState);
  return (
    <DocumentPageLayout>
      <LogoFormScreenMemo logo={logo} />
    </DocumentPageLayout>
  );
};

export const LogoCreateComponentMemo = memo(LogoCreateComponent);