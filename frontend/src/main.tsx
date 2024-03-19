import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { HomePage } from "./toplevelcomponents/homePage/homePage.tsx";
import { ProfilePage } from "./toplevelcomponents/profilePage/profilePage.tsx";
import { MeetupsPage } from "./toplevelcomponents/meetupsPage/meetupsPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //FIXME: Remove for production?
  <React.StrictMode>
    <HomePage />
    <ProfilePage />
    <MeetupsPage />
  </React.StrictMode>
);
