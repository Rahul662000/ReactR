import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('green')

  return (
    <>
      <div className='w-full h-screen duration-200 bg-green-400' style={{background: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

            <button className='bg-red-500 w-20 h-10 rounded-full' onClick={() => setColor('red')}>Red</button>
            <button className='bg-green-500 w-20 h-10 rounded-full' onClick={() => setColor('green')}>Green</button>
            <button className='bg-blue-500 w-20 h-10 rounded-full' onClick={() => setColor('blue')}>Blue</button>
            <button className='bg-yellow-500 w-20 h-10 rounded-full' onClick={() => setColor('yellow')}>Yellow</button>
            <button className='bg-purple-500 w-20 h-10 rounded-full' onClick={() => setColor('purple')}>Purple</button>
            <button className='bg-pink-500 w-20 h-10 rounded-full' onClick={() => setColor('pink')}>Pink</button>
            <button className='bg-gray-500 w-20 h-10 rounded-full' onClick={() => setColor('gray')}>Gray</button>
            <button className='bg-black w-20 h-10 rounded-full' onClick={() => setColor('black')}>Black</button>
            <button className='bg-white w-20 h-10 rounded-full' onClick={() => setColor('white')}>White</button>
            <button className='bg-orange-500 w-20 h-10 rounded-full' onClick={() => setColor('orange')}>Orange</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
