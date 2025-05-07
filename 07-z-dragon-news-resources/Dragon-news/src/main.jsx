
import {
  RouterProvider,
} from "react-router";
import './index.css'

import router from "./Routes/Routes.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./provider/AuthProvider.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render( 
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
