import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { Navbar } from "./components/navbar.tsx";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //FIXME: Remove for production?
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
