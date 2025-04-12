import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About/About";
import Tech from "../pages/Tech/Tech/Tech";
import Contact from "../pages/Contact/Contact";
import NotFoundPage from "../pages/Shared/NotFoundPage";
import PostEmail from "../pages/Home/PostEmail/PostEmail";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/about',
            element:<About></About>

        },
        {
            path:'/service',
            element:<Tech></Tech>

        },
        // {
        //     path:'/contact',
        //     element:<PostEmail></PostEmail>

        // }

      ]   
    },
    {
      path: "*", 
      element: <NotFoundPage></NotFoundPage> ,
    }
  ]);