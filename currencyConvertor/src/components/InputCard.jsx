import React, { useState } from "react";
import useOptions from "../Hooks/useOptions";

const InputCard = ({
  source,
  CurrentVal,
  setCurrentVal,
  isDisabled,
  amount,
  setAmount,
  placeHolder,
}) => {
  const currencies = useOptions();

  return (
    <div className="md:w-120 w-65 bg-white/[0.03] text-white border border-white/10 backdrop-blur-md rounded-2xl shadow-sm">
      <div className="card-body flex items-center justify-between">
        <div>
          <h2 className="ml-5 mt-5 text-lg font-semibold tracking-wider">{source}</h2>
          <select
            className="md:w-30 w-16 mt-10 md:text-[16px] text-sm focus:outline-none text-blue-400 border rounded-md border-white/10 p-2 backdrop-blur-md ml-5 mb-5"
            value={CurrentVal}
            onChange={(e) => {
              setCurrentVal(e.target.value);
            }}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2 className="font-medium text-lg">Amount: </h2>
          <input
            type="number"
            min="0"
            required
            placeholder={placeHolder}
            value={amount}
            title="Amount-input"
            readOnly={source === "To"}
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            onChange={
              source === "From" ? (e) => setAmount(e.target.value) : undefined
            }
            className="input p-2 outline-none border border-white/10 backdrop-blur-md bg-white/[0.03] rounded-md no-spinner
                mt-10 md:w-40 w-21 mr-5 md:text-[16px] text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default InputCard;
