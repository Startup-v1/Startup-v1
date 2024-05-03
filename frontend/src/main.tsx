import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes.tsx";
import { FeedbackButton } from "./sharedComponents/feedbackButton/feedbackButton.tsx";
import { Navbar } from "./sharedComponents/navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //FIXME: Remove for production?
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Router />
    </BrowserRouter>
    {/* <FeedbackButton /> */}
  </React.StrictMode>
);
