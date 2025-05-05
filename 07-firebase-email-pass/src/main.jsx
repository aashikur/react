import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";

import './index.css'
import App from './App.jsx'
import Roots from "./layout/Roots.jsx";
import Home from "./components/Pages/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <div className="test text-red-500">Page Not Found</div>,
    children: [
      {
        index: true,
        Component: Home
      } ,
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);