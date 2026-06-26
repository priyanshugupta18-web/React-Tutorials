import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AdddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo({ title: input }));
      setInput('');
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default AdddTodo
