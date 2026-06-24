import React from "react";
import { useTodo } from "../contexts";
import { useState, useEffect } from "react";
import { Save, Trash2, SquarePen } from "lucide-react";

function Item({ dataItem }) {
  let { updateTodo, deleteTodo, toogleComplete, todos } = useTodo();
  const [todoMsg, setTodoMsg] = useState(dataItem.title);
  const [editable, setEditable] = useState(false);
  const [status, setStatus] = useState(dataItem.isCompleted);

  return (
    <div className="flex border border-white/10 backdrop-blur-md text-white md:text-[16px] text-xs font-light tracking-wider md:w-80 w-70 my-5 p-2 rounded-xl gap-2 items-center">
      <div className="px-2 py-1 rounded-md border border-white/10 backdrop-blur-md">
        <input
          type="checkbox"
          disabled={editable}
          value={status}
          onClick={(e) => {
            setStatus(e.target.checked);
            // console.log(status);
          }}
        />
      </div>
      <div
        className={`w-30 md:w-45 ${editable ? "hidden" : "block"} ${status ? "line-through" : "no-underline"}`}
      >
        {dataItem.title}
      </div>
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
        className={`w-30 outline-none md:w-45 border-none ${editable ? "block" : "hidden"}`}
      />
      <button
        disabled={status}
        className={`toggler border cursor-pointer border-white/10 p-2 rounded-md backdrop-blur-md ${status ? "text-gray-500" : "text-white"}`}
        onClick={() => {
          if (editable) {
            if (todoMsg.trim() !== "") {
              updateTodo(todoMsg, dataItem.id);
            }
            else{
              alert("I am not a noob developer 😅");
            }
          }
          setEditable(!editable);
        }}
      >
        <Save className={`size-4 ${editable ? "block" : "hidden"}`} />
        <SquarePen className={`size-4 ${editable ? "hidden" : "block"}`} />
      </button>
      <button
        className="border cursor-pointer border-white/10 p-2 rounded-md backdrop-blur-md "
        onClick={() => {
          deleteTodo(dataItem.id);
        }}
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  );
}

export default Item;
