/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { EditLogo } from "../../../types/types";
import { setLogo } from "../../../slicers/documentSlicer";
import { useDispatch } from "react-redux";
import { useLogoMutation } from "../../../hooks/useLogoMutation";

interface Props {
  logo: EditLogo;
}

const LogoFormScreen: FC<Props> = ({ logo }) => {

  const dispatch = useDispatch();

  const { handleSubmit, handleFile, file } = useLogoMutation();

  return (
    <form onSubmit={(e) => handleSubmit(e, logo, file)}>
      <div>
        <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Name
        </label>
        <input type="text"
               id="product_name"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Product Name"
               required
               value={logo.name}
               onChange={(e) => dispatch(setLogo({ ...logo, name: e.target.value }))}
        />
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload
        file</label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input" type="file" onChange={handleFile} />
      <button onClick={(e: any) => handleSubmit(e, logo, file)}>Upload</button>
    </form>
  );
};

export const LogoFormScreenMemo = memo(LogoFormScreen);