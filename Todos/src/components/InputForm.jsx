import React, { useState } from "react";
import { useTodo } from "../contexts";

function InputForm() {
  let { addTodo } = useTodo();
  const [msg, setMsg] = useState("");

  return (
    <form
      className="flex items-center gap-5 text-white"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({ id: Date.now(), title: msg, isCompleted: false });
        setMsg("");
      }}
    >
      <input
        required
        type="text"
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        className="p-2 outline-none border border-white/10 w-30 md:w-50 rounded-xl"
        placeholder="write you todo"
      />
      <button
        type="submit"
        className="bg-indigo-400 cursor-pointer px-3 py-2 rounded-lg"
      >
        Add
      </button>
    </form>
  );
}

export default InputForm;
