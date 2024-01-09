import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CheckOut from "../components/CheckOut";
import Booking from "../Pages/Booking";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkOut/:id',
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
          ,loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
         
        },
        {
          path:'/bookings',
          element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
        }

      ]
    },
  ]);
  export  {router};