/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { ChangeEvent, FC, FormEvent, memo } from "react";
import { EditCompany } from "../../../types/types";
import { DarkButtonMemo } from "../../atoms/Buttons/Button";
import { setCompany } from "../../../slicers/documentSlicer";
import { useDispatch } from "react-redux";
import { useCompanyMutation } from "../../../hooks/useCompanyMutation";
import { SelectFormMemo } from "../../atoms/Select";
import {
  CYCLE_OPTIONS,
  DUE_OPTIONS,
  INVOICE_OPTIONS,
  RECEIVE_WAY_OPTIONS,
  TRANSFER_WAY_OPTIONS,
} from "../../../constants/company";

interface Props {
  company: EditCompany;
}

const CompanyFormScreen: FC<Props> = ({ company }) => {
  const dispatch = useDispatch();

  const { createCompanyMutation, updateCompanyMutation } = useCompanyMutation();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (company.id === "")
      createCompanyMutation.mutate(company);
    if (company.id !== "")
      updateCompanyMutation.mutate(company);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input type="text"
                 id="company_name"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="company Name"
                 required
                 value={company.name}
                 onChange={(e) => dispatch(setCompany({ ...company, name: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Phone
          </label>
          <input type="text" id="phone"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={company.phone}
                 onChange={(e) => dispatch(setCompany({ ...company, phone: e.target.value }))}
                 placeholder="company's Phone" />
        </div>
        <div>
          <label htmlFor="due"
                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Payment Date
          </label>
          <input type="text" id="date"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={company.date}
                 onChange={(e) => dispatch(setCompany({ ...company, date: e.target.value }))}
                 placeholder="company's payment day" />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            address
          </label>
          <input type="text" id="address"
                 value={company.address}
                 placeholder={"company's address"}
                 onChange={(e) => dispatch(setCompany({ ...company, address: e.target.value }))}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <SelectFormMemo options={DUE_OPTIONS} name={"due"} label={"Select a due date"} value={company.due}
                        handleChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(setCompany({
                          ...company,
                          due: e.target.value,
                        }))}
        />
        <SelectFormMemo options={CYCLE_OPTIONS} name={"cycle"} label={"Select a payment cycle"} value={company.cycle}
                        handleChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(setCompany({
                          ...company,
                          cycle: e.target.value,
                        }))}
        />
        <SelectFormMemo options={RECEIVE_WAY_OPTIONS} name={"receive_way"} label={"Select a payment way"}
                        value={company.receive_way}
                        handleChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(setCompany({
                          ...company,
                          receive_way: e.target.value,
                        }))}
        />
        <SelectFormMemo options={TRANSFER_WAY_OPTIONS} name={"transfer_way"} label={"Select a transfer way"}
                        value={company.transfer_way}
                        handleChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(setCompany({
                          ...company,
                          transfer_way: e.target.value,
                        }))}
        />
        <SelectFormMemo options={INVOICE_OPTIONS} name={"invoice"} label={"Select an invoice form"}
                        value={company.invoice}
                        handleChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(setCompany({
                          ...company,
                          invoice: e.target.value,
                        }))}
        />
        <div></div>
        <div>
          <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
            Note</label>
          <textarea id="note" rows={4}
                    value={company.note}
                    onChange={(e) => dispatch(setCompany({ ...company, note: e.target.value }))}
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
          <DarkButtonMemo href={"/company"} label={"Return"} />
        </div>
      </div>
    </form>
  );
};

export const CompanyFormScreenMemo = memo(CompanyFormScreen);