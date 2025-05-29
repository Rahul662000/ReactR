import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../Features/todo/todoSlice';

export const store = configureStore({
    reducer:{
    todos: todoReducer,
  }
})

// Save to localStorage whenever todos change
store.subscribe(() => {
  try {
    const { todos } = store.getState().todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
});