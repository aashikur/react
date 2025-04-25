import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
