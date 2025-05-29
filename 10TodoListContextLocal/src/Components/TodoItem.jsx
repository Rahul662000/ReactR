import React from 'react'
import { useTodo } from '../Context/todoContext';
import { useState } from 'react';


function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, toggleCompleted, deleteTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div
      className={`flex border rounded-lg px-3 py-2 gap-x-3 duration-300 text-white ${
        todo.completed ? 'bg-green-700/70' : 'bg-purple-700/60'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-500"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`w-full rounded-md bg-transparent outline-none ${
          isTodoEditable
            ? 'border border-white/50 px-2 text-white'
            : 'border-transparent'
        } ${todo.completed ? 'line-through text-white/70' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="w-8 h-8 rounded-md text-sm flex justify-center items-center bg-gray-100 text-black hover:bg-white"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      <button
        className="w-8 h-8 rounded-md text-sm flex justify-center items-center bg-red-600 hover:bg-red-700 text-white"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
