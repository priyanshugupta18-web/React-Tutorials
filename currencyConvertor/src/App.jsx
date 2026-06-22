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
    <div className="h-screen w-full bg-[#0f172a]" style={{ display: "flex" }}>
      <div
        className="w-2/3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="my-10 text-4xl font-extrabold tracking-tight text-grey-900 md:text-6xl backdrop-blur-sm bg-white/10 px-4 py-2 rounded-xl">
          Currency Convertor
        </h1>
        <InputCard
          source="From"
          CurrentVal={fromCurrency}
          setCurrentVal={setFromCurrency}
          isDisabled={false}
          amount={amount}
          setAmount={setAmount}
          placeHolder={`Enter the Amount in ${fromCurrency.toUpperCase()}`}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="mx-1 font-medium text-lg">Swap</h2>
          <button
            className="
            btn
            btn-circle
            btn-info
            shadow-lg
            my-1
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
          placeHolder={`Converted Amount in ${toCurrency.toUpperCase()}`}
        />
        <button
          className="w-120 my-4 p-5 btn btn-info font-medium text-lg rounded-lg"
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
        className="h-screen w-1/3 "
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default App;
