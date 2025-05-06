import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/pages/Home";
import CatNews from "../components/pages/CatNews";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout ,
    children: [
      {
        path: "",
        Component: Home,
      } ,
      {
        path: "catnews/:id",
        Component: CatNews,
        loader:  () => fetch('/news.json')
  }]
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