/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { LogoProps } from "../../../types/types";
import { ButtonMemo } from "../../atoms/Buttons/Button";
import { useFileUpload } from "../../../hooks/useFileUpload";

const LogoList: FC<LogoProps> = ({ data }) => {

  const { handleMoveToCreate } = useFileUpload();

  return (
    <div className={"flex"}>
      <div className={"absolute right-2"}>
        <ButtonMemo onClick={handleMoveToCreate} label={"add"} />
      </div>
      <div className={"flex flex-wrap pt-20"}>
        {data?.map((logo) => (
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5 mt-4"
            key={logo.id}
          >
            <a href="#">
              <img className="rounded-t-lg" src={logo.src} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {logo.name}
                </h5>
              </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology */}
              {/*   acquisitions of 2021 so far, in reverse chronological order.</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LogoListMemo = memo(LogoList);