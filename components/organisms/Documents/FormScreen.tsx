/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, FormEvent, memo } from "react";
import { EditDocument } from "../../../types/types";
import { DarkButtonMemo } from "../../atoms/Buttons/Button";
import { useDispatch } from "react-redux";
import { setDocument } from "../../../slicers/documentSlicer";

interface Props {
  document: EditDocument;
}

const DocumentFormScreen: FC<Props> = ({ document }) => {
  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    console.log("submit");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label htmlFor="document_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Title
          </label>
          <input type="text"
                 id="document_title"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="document Title"
                 required
                 value={document.title}
                 onChange={(e) => dispatch(setDocument({ ...document, title: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Honorific Title
          </label>
          <input type="text" id="honorific_title"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={document.honorific_title}
                 onChange={(e) => dispatch(setDocument({ ...document, honorific_title: e.target.value }))}
                 placeholder="document's Honorific Title" />
        </div>
        <div>
          <label htmlFor="due"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Expiration
          </label>
          <input type="text" id="expiration"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={document.expiration}
                 onChange={(e) => dispatch(setDocument({ ...document, expiration: e.target.value }))}
                 placeholder="document's Expiration" />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            condition
          </label>
          <input type="text" id="condition"
                 value={document.condition}
                 placeholder={"document's condition"}
                 onChange={(e) => dispatch(setDocument({ ...document, condition: e.target.value }))}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
            Note</label>
          <textarea id="note" rows={4}
                    value={document.note}
                    onChange={(e) => dispatch(setDocument({ ...document, note: e.target.value }))}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input your note...  (optional)"></textarea>
        </div>

      </div>

      <div className={"flex"}>
        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
        <div className={"ml-2"}>
          <DarkButtonMemo href={"/document"} label={"Return"} />
        </div>
      </div>
    </form>
  );
};

export const DocumentFormScreenMemo = memo(DocumentFormScreen)