/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { useRouter } from "next/router";

interface Props {
  href: string;
  label: string;
}

const Button: FC<Props> = ({ href, label }) => {

  const router = useRouter();

  return (
    <button
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      onClick={() => router.push(href)}
    >
      <span
        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {label}
      </span>
    </button>
  );
};

const DarkButton: FC<Props> = ({ href, label }) => {
  const router = useRouter();
  return (
    <button type="button"
            onClick={() => router.push(href)}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      {label}
    </button>
  );
};

export const ButtonMemo = memo(Button);
export const DarkButtonMemo = memo(DarkButton);
