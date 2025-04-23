import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Profile from './components/Profile/Profile.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Users from './components/User/Users.jsx'
import Users2 from './components/User/Users2.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import Post from './components/Home/Post/Post.jsx'
import SinglePost from './components/SinglePost/SinglePost.jsx'

const NormalLoadingPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home },
      {path:'profile', Component: Profile},
      {path:'about',Component: About},
      {
        path:'contact', Component: Contact 
      },
      {
        path:'users', Component: Users, loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'users2',
        element: <Users2 NormalLoadingPromise={NormalLoadingPromise}></Users2> 
      },
      {
        path:'users/:userID',
        loader: async ({ params }) => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`);
          return response;
        },
        Component: UserDetails
      },
      {
        path : 'post',
        Component: Post,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
      }, {
        path: 'post/:postID',
        Component: SinglePost,
        loader: async ({params}) => {
          const response = fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
          return response;
        }
      },
    //   {
    //     path: '*',
    //     element: <h1 className='text-center py-10'>404 Not Found Child</h1>
    //  }
   ]
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
    path: '*',
    element: <h1 className='text-center py-10'>404 Not Found Main</h1>
 }

]) 
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)


