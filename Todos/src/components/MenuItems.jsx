import React, { useState } from "react";
import Item from "./Item";
import { useTodo } from "../contexts";
import { useEffect } from "react";

function MenuItems() {
  let { updateTodo, deleteTodo, toogleComplete, todos } = useTodo();
 
  return (
    <div>
      {todos.map((dataItem) => {
        return (<Item key={dataItem.id} dataItem={dataItem} />);
      })}
    </div>
  );
}

export default MenuItems;
