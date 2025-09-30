import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
} from "react-router-dom";
import home from "./home/home";

export default function App() {
  const route = createBrowserRouter({
    path: "/",
    element: <Home />,
  });

  return;
}
