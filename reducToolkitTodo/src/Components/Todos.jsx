import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, setEditableTodo } from '../Features/todo/todoSlice';

function Todos() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <p className="text-gray-400 text-center mt-6">No Todos yet.</p>;
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg shadow-md"
        >
          <div className="text-lg text-white flex-1">{todo.text}</div>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => dispatch(setEditableTodo(todo.id))}
              className="w-8 h-8 flex items-center justify-center text-sm rounded bg-gray-200 text-black hover:bg-white transition"
            >
              ✏️
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="w-8 h-8 flex items-center justify-center text-sm rounded bg-red-500 text-white hover:bg-red-600 transition"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;