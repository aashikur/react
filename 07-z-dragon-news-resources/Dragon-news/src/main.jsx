
import {
  RouterProvider,
} from "react-router";
import './index.css'

import router from "./Routes/Routes.jsx";
import React from "react";
import ReactDOM from "react-dom/client";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
