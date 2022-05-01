/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { useQueryProducts } from "../../../hooks/useQueryProducts";

export const MonitorComponent: FC = () => {

  const { status, data } = useQueryProducts("55793ba1-c771-4e35-bb37-3db1f9f76683");
  return (
    <>
      <div>monitor</div>
    </>
  );
};