/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, FormEvent, memo } from "react";
import { EditUser } from "../../../types/types";
import { DarkButtonMemo } from "../../atoms/Buttons/Button";
import { useDispatch } from "react-redux";
import { useUserMutation } from "../../../hooks/useUserMutation";
import { setUser } from "../../../slicers/documentSlicer";

interface Props {
  user: EditUser;
}

const UserFormScreen: FC<Props> = ({ user }) => {

  const dispatch = useDispatch();
  const { createUserMutation, updateUserMutation } = useUserMutation();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.id === "")
      createUserMutation.mutate(user);
    if (user.id !== "")
      updateUserMutation.mutate(user);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label htmlFor="user_from" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            From
          </label>
          <input type="text"
                 id="user_name"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="user's name"
                 required
                 value={user.name}
                 onChange={(e) => dispatch(setUser({ ...user, name: e.target.value }))}
          />
        </div>
      </div>
      <div className={"flex"}>
        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
        <div className={"ml-2"}>
          <DarkButtonMemo href={"/user"} label={"Return"} />
        </div>
      </div>
    </form>
  );
};

export const UserFormScreenMemo = memo(UserFormScreen);