/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, FormEvent, memo } from "react";
import { EditProduct } from "../../../types/types";
import { useDispatch } from "react-redux";
import { setMonitor } from "../../../slicers/documentSlicer";
import { useProductMutation } from "../../../hooks/useProductMutation";

interface Props {
  product: EditProduct;
}

const MonitorFormScreen: FC<Props> = ({ product }) => {

  const dispatch = useDispatch();
  const { createProductMutation } = useProductMutation();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.id === "")
      createProductMutation.mutate(product);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input type="text"
                 id="product_name"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Product Name"
                 required
                 value={product.name}
                 onChange={(e) => dispatch(setMonitor({ ...product, name: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Price
          </label>
          <input type="number" id="last_name"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={product.unit_price}
                 onChange={(e) => dispatch(setMonitor({ ...product, unit_price: Number(e.target.value) }))}
                 placeholder="Product's Price" required />
        </div>
        <div>
          <label htmlFor="unit"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Unit
          </label>
          <input type="text" id="unit"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={product.unit}
                 onChange={(e) => dispatch(setMonitor({ ...product, unit: e.target.value }))}
                 placeholder="Product's Unit" required />
        </div>
        <div>
          <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Note
          </label>
          <input type="text" id="note"
                 value={product.note}
                 onChange={(e) => dispatch(setMonitor({ ...product, note: e.target.value }))}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <button type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
      </button>
    </form>
  );
};

export const MonitorFormScreenMemo = memo(MonitorFormScreen);