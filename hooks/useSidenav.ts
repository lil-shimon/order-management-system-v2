/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { sidenavState } from "../slicers/documentSlicer";
import { useCallback } from "react";

export const useSidenav = () => {

  const router = useRouter();
  const sidenav = useSelector(sidenavState);

  const handleChangePage = useCallback((href: string) => {
    router.push(href);
  }, [sidenav]);

  return { sidenav, handleChangePage };
};