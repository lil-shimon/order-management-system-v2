/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, FormEvent, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNews, setEditedNews } from "../slicers/uiSlice";
import { useNewsMutation } from "../hooks/useNewsMutation";

const NewsEdit: FC = () => {
  const dispatch = useDispatch();
  const editedNews = useSelector(selectNews);
  const { createNewsMutation, updateNewsMutation } = useNewsMutation();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedNews.id === "")
      createNewsMutation.mutate(editedNews.content);
    if (editedNews.id)
      updateNewsMutation.mutate(editedNews);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type={"text"}
          className={"mb-3 px-3b py-2 border border-gray-300"}
          placeholder={"new news ?"}
          value={editedNews.content}
          onChange={(e) => dispatch(setEditedNews({ ...editedNews, content: e.target.value}))}
        />
        <button
          className={"disabled:opacity-40 my-3 mx-2 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"}
          disabled={!editedNews.content}
        >
          {editedNews.id === "" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export const NewsEditMemo = memo(NewsEdit);