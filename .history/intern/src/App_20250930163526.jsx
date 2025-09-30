import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  replace,
} from "react-router-dom";
import Home from "./home/home";
import Homepage from "./Product/homepage";
import About from "./Product/about";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "homepage",
          element: <Homepage index:true, replace/>,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return  <RouterProvider router={router} />;
}
