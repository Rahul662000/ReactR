import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { use } from 'react'
import authService from './APPwrite/auth'
import { login , logout } from './Store/authSlice'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  const [loading , setLoading] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>

        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />

      </div>
    </div>
  ):
  null
  
}

export default App
