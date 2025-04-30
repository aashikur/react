import {
    createBrowserRouter,
  } from "react-router";
import App from "../App";
import Roots from "../Roots/Roots";
import HomeLawyers from "../components/Lawyers/HomeLawyers";
import ViewDetails from "../components/Lawyers/ViewDetails";
import Booking from "../pages/Booking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
          index: true,
          Component: HomeLawyers,
          loader: async () => fetch('/Data.json').then(res=> res.json())
        },
        {
          path:'/viewDetails/:id',
          Component: ViewDetails,
          loader: async () => fetch('/Data.json').then(res=>res.json())
        },
        {
          path:'/booking',
          Component: Booking,
        }
      ]
    },
    
  ]);
  
  export default router;