import React from 'react'
import UserContext from '../Context/UserContext'
import { set } from 'mongoose'

function Login() {

    const [userName , setUserName] = React.useState('') 
    const [password , setPassword] = React.useState('')

    const { setUser } = React.useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName && password) {
            setUser({ userName, password })
            setUserName('')
            setPassword('')
        } else {
            alert('Please fill in all fields')
        }
    }

  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={userName} placeholder='username' onChange={(e) => 
            setUserName(e.target.value)
        }/>
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
