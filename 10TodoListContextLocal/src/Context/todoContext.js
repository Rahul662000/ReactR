import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos : [
        { id: 1, todo: "Learn React", completed: false },
        { id: 2, todo : "Learn Context API", completed: false },
        { id: 3, todo : "Build a Todo App", completed: false }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}