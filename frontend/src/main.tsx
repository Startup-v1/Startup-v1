import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { Navbar } from "./components/navbar.tsx";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes.tsx";
import { FeedbackButton } from "./components/feedbackButton/feedbackButton.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //FIXME: Remove for production?
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
    <FeedbackButton />
  </React.StrictMode>
);
