import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

const App = () => {
  let [status, setStatus] = useState("copy");
  let [btnColor, setBtnColor] = useState("#E5FFDE");
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(8);
  let [number, setNumber] = useState(false);
  let [character, setCharacter] = useState(false);

  let passwordGenerator = useCallback(
    (password, length, number, character) => {
      password = "";
      let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (number) string += "1234567890";
      if (character) string += "`!@#$%^&*()_+{}|[]/.,><?;':=+";

      for (let i = 1; i <= length; i++) {
        let randomIndex = Math.floor(Math.random() * string.length);
        password += string.charAt(randomIndex);
      }

      setPassword(password);
    },
    [length, number, character, setPassword],
  );

  useEffect(() => {
    passwordGenerator(password, length, number, character);
  }, [length, number, character]);

  return (
    <div className="w-full h-screen bg-slate-800 flex justify-center items-center">
      <div className="shadow-md max-w-sm h-100 backdrop-blur-md p-4 bg-white/[0.03] border border-white/10 rounded-4xl">
        <div className="text-center border border-white/10 bg-white/[0.03] rounded-2xl my-8 backdrop-blur-md p-2 text-white">
          <h1 className="text-2xl font-semibold tracking-wider text-center text-white">
            Password Generator
          </h1>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="password"
            className="w-45 p-2 text-white bg-white/[0.03] border border-white/10 backdrop-blur-md text-sm md:text-[16px] cursor-text outline-none rounded-lg"
            value={password}
            readOnly
          />
          <button
            className="p-2 w-20 text-white rounded-lg cursor-pointer bg-white/[0.03] border border-white/10"
            onClick={() => {
              window.navigator.clipboard.writeText(password);
              setStatus("copied!");
              setBtnColor("#525c50");
              setTimeout(() => {
                setStatus("copy");
                setBtnColor("#E5FFDE");
              }, 500);
            }}
          >
            {status}
          </button>
        </div>
        <div className="flex flex-col my-5 gap-2">
          <input
            type="range"
            min={1}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <div className="flex justify-between tracking-wider bg-white/[0.03] border border-white/10 rounded-2xl p-2 items-center">
            <label htmlFor="slider" className="text-white">
              Length: {length}
            </label>
          </div>
          <div className="flex justify-between tracking-wider bg-white/[0.03] border border-white/10 rounded-2xl p-2 items-center">
            <label htmlFor="number-checkbox" className="text-white">
              Number
            </label>
            <input
              type="checkbox"
              className="cursor-pointer"
              className="mx-2"
              checked={number}
              onChange={(e) => {
                setNumber(e.target.checked);
              }}
            />
          </div>
          <div className="flex justify-between tracking-wider bg-white/[0.03] border border-white/10 rounded-2xl p-2 items-center">
            <label htmlFor="character-checkbox" className="text-white">
              Character
            </label>
            <input
              type="checkbox"
              style={{ cursor: "pointer" }}
              className="mx-2 cursor-pointer"
              onChange={(e) => {
                setCharacter(e.target.checked);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
