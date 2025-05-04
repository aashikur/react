import {
  createBrowserRouter,
} from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Banner from "../component/Banner/Banner";
import About from "../component/About/About";
import BooksDetails from "../component/BooksDetails/BooksDetails";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        path:'/',
        Component: Home,

      },
      {
        path:'/about',
        Component: About
      },
      {
        path: '/readList',
        Component: ReadList,
        loader: () => fetch('booksData.json')
      },
      {
        path:'/booksDetails/:id',
        Component: BooksDetails,
        loader: () => fetch('booksData.json')
      },
    ]
  },
]);