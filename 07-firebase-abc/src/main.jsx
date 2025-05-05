
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import Roots from './layouts/Roots.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,
        element: <h1 className='text-3xl text-center py-10'>Home</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  }
]);
const root = document.getElementById('root')


ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);