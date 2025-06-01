import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import HomePage from '../src/Pages/HomePage.jsx'
import EditPost from '../src/Pages/EditPost.jsx'
import AllPosts from "./Pages/AllPosts.jsx";
import Post from '../src/Pages/Post.jsx'
import LogIn from './Pages/LogIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import AddPost from './Pages/AddPost.jsx'

const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path : '/',
        element: <HomePage />
      },
      {
        path : '/login',
        element : (
          <AuthLayout authentication={false}>
            <LogIn />
          </AuthLayout>
        )
      },
      {
        path : '/signup',
        element : (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path : '/all-posts',
        element : (
          <AuthLayout authentication>
          { " "
          }
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path : '/edit-post/:slug',
        element : (
          <AuthLayout authentication>
          { " "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path : '/post/:slug',
        element : <Post />
      },
      {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
