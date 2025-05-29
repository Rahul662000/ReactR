import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Context/todoContext';


function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-gray-300 rounded-l-lg px-3 outline-none bg-gray-100 text-black py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm
