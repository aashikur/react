import {
  RouterProvider,
} from "react-router";

import ReactDOM from "react-dom/client";
import './index.css'
import router from "./Routes/Routes.jsx";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
)