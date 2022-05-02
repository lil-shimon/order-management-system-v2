/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { DocumentPageLayout } from "../Document/Layout";
import { MonitorFormScreenMemo } from "../../organisms/Monitors/FormScreen";
import { memo } from "react";
import { monitorState } from "../../../slicers/documentSlicer";
import { useSelector } from "react-redux";

const MonitorCreateComponent = () => {

  const monitor = useSelector(monitorState);

  return (
    <DocumentPageLayout>
      <MonitorFormScreenMemo product={monitor} />
    </DocumentPageLayout>
  );
};

export const MonitorCreateComponentMemo = memo(MonitorCreateComponent);