import { Route, Routes } from "react-router-dom";
import { HomePage } from "@Pages/home/home.tsx";
import { TripsPage } from "@Pages/trips/trips.tsx";
import { MeetupsPage } from "@Pages/meetups/meetups";
import { RoutePaths } from "./routePaths.ts";

export const Router = () => {
  return (
    <Routes>
      <Route path={RoutePaths.index} element={<HomePage />} />
      {/* <Route path={RoutePaths.cityDetails} element={<CityDetails />} /> */}
      <Route path={RoutePaths.profile} element={<TripsPage />} />
      <Route path={RoutePaths.meetups} element={<MeetupsPage />} />
    </Routes>
  );
};
