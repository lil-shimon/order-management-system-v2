/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { ChangeEvent, FC, memo } from "react";

interface Props {
  label?: string;
  placeHolder?: string;
  options: { id: number, name: string }[];
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => { payload: any; type: string };
}

const SelectForm: FC<Props> = ({
  label = "Select an option",
  placeHolder = "Choose an option",
  options,
  name,
  value,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
      </label>
      <select id={name}
              value={value}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>{value === "" ? placeHolder : value}</option>
        {options.map((option) => (
          <option value={option.name} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export const SelectFormMemo = memo(SelectForm);