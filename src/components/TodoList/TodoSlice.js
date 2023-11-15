import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', name: 'Learn Yoga', completed: false, priority: 'Medium' },
  { id: '2', name: 'Learn Redux', completed: true, priority: 'High' },
  { id: '3', name: 'Learn JavaScript', completed: false, priority: 'Low' },
];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic by using the Immer library.
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      if (currentTodo) currentTodo.completed = !currentTodo.completed;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodoStatus } = todoListSlice.actions;
export default todoListSlice.reducer;