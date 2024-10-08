import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Reset from "./pages/reset";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/reset",
      element: <Reset />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
