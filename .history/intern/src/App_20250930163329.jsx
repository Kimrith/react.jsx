import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./home/home";
import Homepage from "./Product/homepage";
import About from "./Product/about";

export default function App() {
  const route = createBrowserRouter({
    path: "/",
    element: <Home />,
    chidren: {{
      path: "HomePage",
      element: <Homepage />
    },
      

      {
        path: 'about',
        element: <About/>
      }
    },
  });

  return;
}
