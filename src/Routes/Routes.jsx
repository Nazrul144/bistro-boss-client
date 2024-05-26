import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Items from "../pages/items/Items";
import Contact from "../pages/Contact/Contact";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h1>404 Page Not found</h1>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/items',
            element: <Items></Items>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
      ]
    },
  ]);