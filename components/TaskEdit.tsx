/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, FormEvent, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTask, setEditedTask } from "../slicers/uiSlice";
import { useTaskMutation } from "../hooks/useTaskMutation";

const TaskEdit: FC = () => {

  const dispatch = useDispatch();
  const editedTask = useSelector(selectTask);

  const { createTaskMutation, updateTaskMutation } = useTaskMutation();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTask.id === "")
      createTaskMutation.mutate(editedTask.title);
    if (editedTask.id)
      updateTaskMutation.mutate(editedTask);
  };

  if (createTaskMutation.error || updateTaskMutation.error) return <div>Error</div>

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className={"mb-3 px-3 py-2 border border-gray-300"}
          placeholder={"new task ?"}
          value={editedTask.title}
          onChange={(e) => dispatch(setEditedTask({ ...editedTask, title: e.target.value }))}
        />
        <button
          className={"disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"}
          disabled={!editedTask.title}
        >
          {editedTask.id === "" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export const TaskEditMemo = memo(TaskEdit);