import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load todos from localStorage
const loadFromLocalStorage = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (e) {
    console.error("Error loading from localStorage:", e);
    return [];
  }
};

const initialState = {
  todos: loadFromLocalStorage(),   // ← load here
  editTodoId: null,
  editTodoText: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
      state.editTodoId = null;
      state.editTodoText = "";
    },
    setEditableTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        state.editTodoId = todo.id;
        state.editTodoText = todo.text;
      }
    },
    clearEditableTodo: (state) => {
      state.editTodoId = null;
      state.editTodoText = "";
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  setEditableTodo,
  clearEditableTodo,
} = todoSlice.actions;

export default todoSlice.reducer;