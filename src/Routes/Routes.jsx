import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
          element:<div>this is checkOut div</div>
          ,loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
         ,
        }

      ]
    },
  ]);
  export  {router};