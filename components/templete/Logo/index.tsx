/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { LogoListMemo } from "../../organisms/Logo/list";
import { LogoProps } from "../../../types/types";

const LogoComponent: FC<LogoProps> = ({ data }) => {

  return (
    <DocumentPageLayout>
      <LogoListMemo data={data}/>
    </DocumentPageLayout>
  )
}

export const LogoComponentMemo = memo(LogoComponent)