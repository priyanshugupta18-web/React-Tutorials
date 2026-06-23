import React from "react";
import { useState } from "react";
import InputCard from "./components/InputCard";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

const App = () => {
  let [fromCurrency, setFromCurrency] = useState("usd");
  let [toCurrency, setToCurrency] = useState("inr");
  let [amount, setAmount] = useState("");
  let [ConvertedAmount, setConvertedAmount] = useState("");
  let [swap, setSwap] = useState("↑↓");

  let data = useCurrencyInfo(fromCurrency);

  return (
    <div className="h-screen overflow-x-hidden w-full bg-slate-800 flex">
      <div
        className="flex justify-center items-center flex-col lg:w-2/3 w-full"
      >
        <InputCard
          source="From"
          CurrentVal={fromCurrency}
          setCurrentVal={setFromCurrency}
          isDisabled={false}
          amount={amount}
          setAmount={setAmount}
          placeHolder={`${fromCurrency.toUpperCase()}`}
        />
        <div
          className="flex justify-center items-center"
        >
          <h2 className="mx-1 font-medium text-white text-lg">Swap</h2>
          <button
            className="
            bg-blue-500
            rounded-full
            text-white
            shadow-lg
            m-2
            p-2
  "
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
              if (swap === "↑↓") setSwap("↓↑");
              else setSwap("↑↓");
              setConvertedAmount("");
            }}
          >
            {swap}
          </button>
        </div>
        <InputCard
          source="To"
          CurrentVal={toCurrency}
          setCurrentVal={setToCurrency}
          isDisabled={false}
          amount={ConvertedAmount}
          setAmount=""
          placeHolder={`${toCurrency.toUpperCase()}`}
        />
        <button
          className="md:w-120 w-65 my-4 p-5 text-white bg-blue-500 font-medium text-lg rounded-lg"
          onClick={() =>
            // setConvertedAmount(Number(amount)*Number(data.fromCurrency[toCurrency]))
            setConvertedAmount(Number(amount) * Number(data[toCurrency]))
          }
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1523299652504-84129441a887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjV8fHxlbnwwfHx8fHw%3D"
        alt="Stock-market-image"
        className="h-screen w-1/3 hidden lg:block object-cover "
      />
    </div>
  );
};

export default App;
