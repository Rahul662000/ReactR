import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  let count = counter;

  const addValue = () => {
    if(count < 20){
      count = count + 1;
      console.log(count);
      setCounter(count);
    }
    else {
      alert("Count cannot exceed 20!");
    }
  }
  const removeValue = () => {
    if(count > 0){
    count = count - 1;
    console.log(count);
    setCounter(count);
    } else {
      alert("Count cannot be less than 0!");
    }
  }

  return (
    <>
      <h1>Rahul React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
