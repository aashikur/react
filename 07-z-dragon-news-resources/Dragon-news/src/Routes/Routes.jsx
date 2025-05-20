import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/pages/Home";
import CatNews from "../components/pages/CatNews";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";


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
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register,
      }
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    // Component: NewsDetails, 
    loader: () => fetch('/news.json'),
  },
  {
    path: "/*",
    element: <div className="test">ERROOR</div>,
  },

]);

export default router