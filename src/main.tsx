import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./pages/App";
import ErrorPage from "./ErrorPage";
import Tshirts from "./pages/Tshirts";
import Pants from "./pages/Pants";
import Caps from "./pages/Caps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tshirts",
    element: <Tshirts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pants",
    element: <Pants />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/caps",
    element: <Caps />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
