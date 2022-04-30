/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { Task } from "../types/types";
import { useDispatch } from "react-redux";
import { useTaskMutation } from "../hooks/useTaskMutation";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { setEditedTask } from "../slicers/uiSlice";

interface Props {
  task: Task;
}

const TaskItem: FC<Props> = ({ task }) => {

  const dispatch = useDispatch();
  const { deleteTaskMutation } = useTaskMutation();

  if (deleteTaskMutation.isLoading) return <div>...loading</div>;
  return (
    <li className={"my-3"}>
      <span className={"font-bold"}>{task.title}</span>
      <div className={"flex float-right ml-20"}>
        <PencilAltIcon
          className={"h-5 w-5 mx-1 text-blue-500 cursor-pointer"}
          onClick={() => {
            dispatch(setEditedTask({
              id: task.id,
              title: task.title,
            }));
          }}
        />
        <TrashIcon
          className={"h-5 w-5 text-blue-500 cursor-pointer"}
          onClick={() => {
            deleteTaskMutation.mutate(task.id);
          }}
        />
      </div>
    </li>
  );
};

export const TaskItemMemo = memo(TaskItem);