/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { FC, memo } from "react";
import { PostageProps } from "../../../types/types";

const PostageList: FC<PostageProps> = ({ data }) => {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-4 flex">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"></path>
            </svg>
          </div>
          <input type="text" id="table-search"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search for items" />
        </div>
        {/* <div className={"absolute right-2"}> */}
        {/*   <ButtonMemo onClick={() => handleMoveToCreatePage()} label={"add"} /> */}
        {/* </div> */}
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            From
          </th>
          <th scope="col" className="px-6 py-3">
            To
          </th>
          <th scope="col" className="px-6 py-3">
            Size
          </th>
          <th scope={"col"} className={"px-6 py-3"}>
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody>
        {data?.map((postage) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={postage.id}
          >
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              {postage.from}
            </th>
            <td className="px-6 py-4">
              {postage.to}
            </td>
            <td className="px-6 py-4">
              {postage.size}
            </td>
            <td className="px-6 py-4">
              {postage.price}
            </td>
            <td className="px-6 py-4 text-right">
              <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                //                 onClick={() => handleMoveToEditPage(postage)}
              >
                Edit
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export const PostageListMemo = memo(PostageList);
