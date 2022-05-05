/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, FormEvent, memo } from "react";
import { EditPostage } from "../../../types/types";
import { DarkButtonMemo } from "../../atoms/Buttons/Button";
import { useDispatch } from "react-redux";
import { setPostage } from "../../../slicers/documentSlicer";
import { usePostageMutation } from "../../../hooks/usePostageMutation";

interface Props {
  postage: EditPostage;
}

const PostageFormScreen: FC<Props> = ({ postage }) => {
  const dispatch = useDispatch();
  const { createPostageMutation } = usePostageMutation();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postage.id === "")
      createPostageMutation.mutate(postage);
    if (postage.id !== "")
      console.log("edit");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label htmlFor="postage_from" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            From
          </label>
          <input type="text"
                 id="postage_from"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="postage's From"
                 required
                 value={postage.from}
                 onChange={(e) => dispatch(setPostage({ ...postage, from: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            To
          </label>
          <input type="text" id="postage_to"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={postage.to}
                 onChange={(e) => dispatch(setPostage({ ...postage, to: e.target.value }))}
                 placeholder="postage's To" required />
        </div>
        <div>
          <label htmlFor="size"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Size
          </label>
          <input type="text" id="size"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={postage.size}
                 onChange={(e) => dispatch(setPostage({ ...postage, size: e.target.value }))}
                 placeholder="postage's Size" required />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Price
          </label>
          <input type="text" id="price"
                 value={postage.price}
                 onChange={(e) => dispatch(setPostage({ ...postage, price: Number(e.target.value) }))}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className={"flex"}>
        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
        <div className={"ml-2"}>
          <DarkButtonMemo href={"/postage"} label={"Return"} />
        </div>
      </div>
    </form>
  );
};

export const PostageFormScreenMemo = memo(PostageFormScreen);