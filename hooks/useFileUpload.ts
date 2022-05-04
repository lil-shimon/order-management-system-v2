/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useRouter } from "next/router";

export const useFileUpload = () => {
  const router = useRouter();

  // move to logo hook
  const handleMoveToCreate = () => {
    router.push("/logo/create");
  };


  return {
    handleMoveToCreate,
  };
};