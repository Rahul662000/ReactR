import { useState } from 'react'
import './App.css'
import { set } from 'mongoose'
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './Components'
import { TodoProvider } from './Context/todoContext'

// function App() {

//   const [todos, setTodos] = useState([])

//   const addTodo = (todo) => {
//     setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo}])
//   }

//   const updateTodo = (id, todo) => {
//     setTodos((prevTodos) => 
//       prevTodos.map(prevtodo => prevtodo.id === id ? todo : prevtodo)
//     )
//   }

//   const deleteTodo = (id) => {
//     setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
//   }

//   const toggleCompleted = (id) => {
//     setTodos((prevTodos) => 
//       prevTodos.map(todo => 
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     )
//   }

//   useEffect(() => {
//      const todos =  JSON.parse(localStorage.getItem("todos"))
//      if(todos && todos.length > 0){
//         setTodos(todos)
//      }
//   } , [])

//   useEffect(() => {
//      localStorage.setItem("todos",JSON.stringify(todos))
//   } , [todos])

//   return (
//     <TodoProvider value={{ todos, addTodo , updateTodo, deleteTodo, toggleCompleted }}>
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//             <div className="mb-4">
//               <TodoForm />
//             </div>
//             <div className="flex flex-wrap gap-y-3">
//               {/*Loop and Add TodoItem here */}
//                         {todos.map((todo) => (
//                           <div key={todo.id}
//                           className='w-full'
//                           >
//                             <TodoItem todo={todo} />
//                           </div>
//                 ))}
//             </div>
//         </div>
//       </div>
//     </TodoProvider>
//   )
// }

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-gray-800 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-gray-900">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-white">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
