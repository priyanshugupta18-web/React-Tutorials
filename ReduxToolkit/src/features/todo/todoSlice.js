import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state,  action) => {
            state.todos.push({
                id: nanoid(),
                title: action.payload.title,
            })
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
// exports the action creators addTodo and removeTodo from the Redux slice, making them available for use in components to dispatch state updates.

export default todoSlice.reducer;