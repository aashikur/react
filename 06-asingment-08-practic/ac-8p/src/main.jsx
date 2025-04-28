import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import Root from './Root/Root';
import ViewDetails from './components/BestLawyers/ViewDetails';
import BookingList from './Pages/BookingList/BookingList';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => { return fetch('/Data.json').then(res => res.json()); } 
      },
      {
        path: '/booking',
        Component: BookingList,
      },
      {
        path: 'viewdetails/:id',
        Component: ViewDetails
      }
    ]
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
