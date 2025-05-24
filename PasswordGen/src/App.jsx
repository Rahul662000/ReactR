import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [symbolAllowed, setSymbolAllowed] = useState(true)
  const [password, setPassword] = useState('')

  // Ref hook
  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(symbolAllowed){
      str += "!@#$%^&*()_+-=\|]}[{;:,<.>/?'"
    }

    for(let i = 1 ; i <= length ; i++){

      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);

    }

    setPassword(pass);

  } , [length , numberAllowed , symbolAllowed , setPassword])

  useEffect(() => {
    passwordGenerator();
  },[length , numberAllowed , symbolAllowed , passwordGenerator])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    console.log(passwordRef)
    window.navigator.clipboard.writeText(password)
  } , [password])



  return (
    <div className="w-[60%] mx-auto bg-gray-800 text-orange-400 shadow-lg rounded-2xl px-6 py-5 my-10">

      <h2 className="text-2xl font-bold mb-6 text-center text-white">🔐 Password Generator</h2>

      {/* Password Display + Copy */}
      <div className="flex items-center shadow-inner rounded-lg overflow-hidden mb-6 border border-gray-600">
        <input
          type="text"
          value={password}
          className="w-full bg-gray-900 text-white outline-none py-2 px-3"
          placeholder="Your password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 hover:bg-blue-800 transition text-white px-4 py-2 font-medium"
          onClick={copyToClipBoard}
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 text-sm">

        {/* Length Range */}
        <div className="flex items-center justify-between">
          <label htmlFor="lengthRange" className="text-white font-medium">
            Length: <span className="text-orange-300">{length}</span>
          </label>
          <input
            id="lengthRange"
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-2/3 accent-orange-500"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Numbers */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="accent-orange-500"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-white">Include Numbers</label>
        </div>

        {/* Symbols */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={symbolAllowed}
            id="symbolsInput"
            className="accent-orange-500"
            onChange={() => setSymbolAllowed((prev) => !prev)}
          />
          <label htmlFor="symbolsInput" className="text-white">Include Symbols</label>
        </div>

        {/* Generate Button */}
        <button
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default App
