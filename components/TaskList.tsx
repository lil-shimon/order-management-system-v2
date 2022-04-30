/*
 * Copyright (c) 2022. Kenta Shimosawa
 */


import { FC, memo } from "react";
import { useQueryTasks } from "../hooks/useQueryTasks";
import { TaskItemMemo } from "./TaskItem";

const TaskList: FC = () => {
  const { status, data } = useQueryTasks();

  if (status === "loading") return <div>...loading</div>;
  if (status === "error") return <div>Error</div>;
  return (
    <ul>
      {data?.map((task) => (
        <TaskItemMemo task={task} key={task.id} />
      ))}
    </ul>
  );
};

export const TaskListMemo = memo(TaskList);