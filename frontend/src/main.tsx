import React from "react";
import ReactDOM from "react-dom/client";
import "@Scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import { FeedbackButton } from "@SharedComponents/feedbackButton/feedbackButton.tsx";
import { Router } from "./routes/routes";
import { Navbar } from "@SharedComponents/navbar/navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //FIXME: Remove for production + remove console.logs
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
    <FeedbackButton />
  </React.StrictMode>
);
