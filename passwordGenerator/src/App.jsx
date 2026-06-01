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
    <div
      className="h-screen w-full"
      style={{
        backgroundColor: "#343E3D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        className="card shadow-xl w-150 h-55 bg-base-100 card-md p-4 rounded-lg"
        style={{ backgroundColor: "#607466" }}
      >
        <div className="card-body">
          <h1
            className="text-2xl font-bold my-4"
            style={{ textAlign: "center", color: "#944654" }}
          >
            Password Generator
          </h1>
          <input
            type="text"
            placeholder="password"
            className="w-114 px-3 py-2 font-bold text-lg rounded-lg"
            value={password}
            readOnly
            style={{
              backgroundColor: "#AF90A9",
              color: "#944654",
              outline: "none",
              cursor: "text",
            }}
          />
          <button
            className="px-4 mx-2 py-2 rounded-lg cursor-pointer"
            style={{ backgroundColor: btnColor }}
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
          <input
            type="range"
            min={1}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="my-2"
          />
          <label htmlFor="slider" style={{ color: "#944654" }}>
            Length: {length}
          </label>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            className="mx-2"
            checked={number}
            onChange={(e) => {
              setNumber(e.target.checked);
            }}
          />
          <label htmlFor="number-checkbox" style={{ color: "#944654" }}>
            Number
          </label>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            className="mx-2"
            checked={character}
            onChange={(e) => {
              setCharacter(e.target.checked);
            }}
          />
          <label htmlFor="character-checkbox" style={{ color: "#944654" }}>
            Character
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
