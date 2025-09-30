import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./home/home";
import Homepage from "./Product/homepage";
import About from "./Product/about";

const route = createBrowserRouter([
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

export default function App() {
  return <RouterProvider router={router} />;
}
