/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigationState, setNavigation } from "../slicers/uiSlice";
import { useRouter } from "next/router";

export const useNavigation = () => {
  const navigation = useSelector(navigationState);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangePage = useCallback(
    (e: any, name: string, href: string) => {
      e.preventDefault();
      const newNavigation = navigation.map((page) => {
        return (page.name === name) ? { ...page, current: true } : { ...page, current: false };
      });
      dispatch(setNavigation(newNavigation));
      router.push(href);
    },
    [navigation],
  );

  return { navigation, handleChangePage };
};