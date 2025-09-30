import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
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
          index: true, // default route
          element: <Homepage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*", // catch-all for unknown routes
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider route={router} />;
}
