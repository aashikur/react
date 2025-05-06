import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout
  },
  {
    path: "/auth",
    element: <div className="test">Auth layout</div>,
  },
  {
    path: "/news",
    element: <div className="test">News Page</div>,
  },
  {
    path: "/*",
    element: <div className="test">ERROOR</div>,
  },

]);

export default router