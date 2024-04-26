import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import { ProfilePage } from "../pages/profilePage/profilePage";
import { MeetupsPage } from "../pages/meetupsPage/meetupsPage";
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
