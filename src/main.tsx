import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./pages/App";
import ErrorPage from "./ErrorPage";
import Tshirts from "./pages/Tshirts";
import Caps from "./pages/Caps";
import LoginRegister from "./pages/LoginRegister";
import Cart from "./pages/Cart";
import Trousers from "./pages/Trousers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login_register",
    element: <LoginRegister />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tshirts",
    element: <Tshirts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trousers",
    element: <Trousers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/caps",
    element: <Caps />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/product`,
    element: <Caps />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
