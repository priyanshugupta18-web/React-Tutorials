import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(removeTodo({ id: todo.id }) )}>
              Remove Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
