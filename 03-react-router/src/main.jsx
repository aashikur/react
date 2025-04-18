import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Profile from './components/Profile/Profile.jsx'
import About from './components/About/About.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home },
      {path:'profile', Component: Profile}

    ]
  }, 
  {
    path: 'about',
    Component: About
  },
  {
    path: 'service',
    element: <div className='text-3xl'> <a className='border-b' href="/">Back</a> Element Service</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
     
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
