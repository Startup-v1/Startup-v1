import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { Navbar } from "./components/navbar.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //FIXME: Remove for production?
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);sdfasd
