/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { EditLogo } from "../../../types/types";
import { setLogo } from "../../../slicers/documentSlicer";
import { useDispatch } from "react-redux";
import { useLogoMutation } from "../../../hooks/useLogoMutation";
import { DarkButtonMemo } from "../../atoms/Buttons/Button";

interface Props {
  logo: EditLogo;
}

const LogoFormScreen: FC<Props> = ({ logo }) => {

  const dispatch = useDispatch();

  const { handleSubmit, handleFile, file } = useLogoMutation();

  return (
    <form onSubmit={(e) => handleSubmit(e, logo, file)}>
      <div className={"w-2/4 mb-4"}>
        <label htmlFor="logo_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Name
        </label>
        <input type="text"
               id="logo_name"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Logo Name"
               required
               value={logo.name}
               onChange={(e) => dispatch(setLogo({ ...logo, name: e.target.value }))}
        />
      </div>
      <div className={"w-2/4 mb-4"}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload
          file</label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input" type="file" onChange={handleFile} />
      </div>
      <div className={"flex"}>
        <button onClick={(e: any) => handleSubmit(e, logo, file)}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
        <div className={"ml-2"}>
          <DarkButtonMemo href={"/logo"} label={"Return"} />
        </div>
      </div>
    </form>
  );
};

export const LogoFormScreenMemo = memo(LogoFormScreen);