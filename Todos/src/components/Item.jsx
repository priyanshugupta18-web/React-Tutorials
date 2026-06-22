import React from "react";
import { useTodo } from "../contexts";
import { useState } from "react";
import { Save, Trash2, SquarePen } from "lucide-react";

function Item({dataItem}) {
    let { updateTodo, deleteTodo, toogleComplete, todos } = useTodo();
  const [todoMsg, setTodoMsg] = useState(dataItem.title);
  const [editable, setEditable] = useState(false);
  return (
    <div className="flex bg-yellow-500 w-68 my-5 p-2 rounded-xl gap-2 items-center">
      <div className={`w-50 bg-amber-900 ${editable ? "hidden" : "block"}`}>
        {dataItem.title}
      </div>
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
        className={`outline-none w-50 border-none ${editable ? "block" : "hidden"}`}
      />
      <button
        className={`bg-red-500`}
        onClick={() => {
          if (editable) {
            updateTodo(todoMsg, dataItem.id);
          }
          setEditable(!editable);
        }}
      >
        <Save className={`${editable ? "block" : "hidden"}`} />
        <SquarePen className={`${editable ? "hidden" : "block"}`} />
      </button>
      <button
        className="bg-blue-500"
        onClick={() => {
          deleteTodo(dataItem.id);
        }}
      >
        <Trash2 />
      </button>
    </div>
  );
}

export default Item;
