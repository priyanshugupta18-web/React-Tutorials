import { useEffect, useState } from "react";
import { InputForm } from "./components";
import MenuItems from "./components/MenuItems";
import { TodoProvider, useTodo } from "./contexts";

function App() {
  const [todos, setTodos] = useState(() => {
    if(JSON.parse(localStorage.getItem("todos")) !== null) {return JSON.parse(localStorage.getItem("todos"))}
    else {return []}
  });
  const addTodo = (todo) => {
    setTodos((prev) => ([...prev, todo]))
  };

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((todo) => (todo.id !== id))));
  };

  const updateTodo = (todoMsg, id) => {
    setTodos((prev) => (
      prev.map((todo) => ((todo.id === id)?{...todo,title:todoMsg}:todo))
    ))
  };

  const toogleComplete = (id) => {
    setTodos((prev) => (
      prev.map((todo) => ((todo.id === id)?{...todo,isCompleted:!(todo.isCompleted)}:todo))
    ))
  };
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full">
      <div className="mx-auto mt-10 text-3xl w-72 md:text-5xl text-white md:w-115">
        Save Your Toods Here
      </div>
      <div className="md:max-w-sm max-w-xs mx-auto min-h-60 bg-white/[0.03] border rounded-2xl border-white/10 backdrop-blur-md-blur-md my-25 md:px-10 px-7 pt-5">
        <TodoProvider
          value={{ addTodo, deleteTodo, updateTodo, toogleComplete, todos }}
        >
          <InputForm />
          <MenuItems />
        </TodoProvider>
      </div>
    </div>
  );
}

export default App;
