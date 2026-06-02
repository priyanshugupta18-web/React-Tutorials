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
    <div className="card glass w-120 bg-base-100 card-md shadow-sm">
      <div className="card-body flex flex-row items-center justify-between">
        <div>
          <h2 className="card-title">{source}</h2>
          <select
            className="select select-info w-30 mt-10 focus:outline-none
                focus:ring-0
                focus:ring-offset-0"
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
            className="input validator no-spinner
                border-sky-500 focus:outline-none
                focus:ring-0
                focus:ring-offset-0 mt-10 w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default InputCard;
