import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, clearEditableTodo } from '../Features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { editTodoId, editTodoText } = useSelector((state) => state.todos);

  useEffect(() => {
    if (editTodoId) {
      setInput(editTodoText);
    }
  }, [editTodoId, editTodoText]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editTodoId) {
      dispatch(updateTodo({ id: editTodoId, newText: input }));
    } else {
      dispatch(addTodo(input));
    }

    setInput('');
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row gap-4 w-full mb-6"
    >
      <input
        type="text"
        className="flex-1 bg-zinc-800 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600/50 py-2 px-4 text-base transition duration-200 outline-none shadow-sm"
        placeholder={editTodoId ? 'Edit Todo...' : 'Enter a Todo...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className={`${
          editTodoId ? 'bg-green-600' : 'bg-indigo-600'
        } text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition`}
      >
        {editTodoId ? 'Update Todo' : 'Add Todo'}
      </button>

      {editTodoId && (
        <button
          type="button"
          onClick={() => {
            dispatch(clearEditableTodo());
            setInput('');
          }}
          className="bg-gray-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddTodo;