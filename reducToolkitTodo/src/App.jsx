import './App.css'
import AddTodo from './Components/addTodo'
import Todos from './Components/Todos'

function App() {

  return (
   <div className="min-h-screen bg-zinc-900 text-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">Redux Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
