import { Route, Routes } from "react-router-dom";
import { HomePage } from "@Pages/homePage/homePage.tsx";
import { ProfilePage } from "@Pages/profilePage/profilePage";
import { MeetupsPage } from "@Pages/meetupsPage/meetupsPage";
import { RoutePaths } from "./routePaths.ts";

export const Router = () => {
  return (
    <Routes>
      <Route path={RoutePaths.index} element={<HomePage />} />
      <Route path={RoutePaths.profile} element={<ProfilePage />} />
      <Route path={RoutePaths.meetups} element={<MeetupsPage />} />
    </Routes>
  );
};
