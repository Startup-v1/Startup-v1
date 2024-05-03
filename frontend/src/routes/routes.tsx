import { Route, Routes } from "react-router-dom";
import { HomePage } from "@Pages/home/home.tsx";
import { TripsPage } from "@Pages/trips/trips.tsx";
import { MeetupsPage } from "@Pages/meetups/meetups";
import { RoutePaths } from "./routePaths.ts";
import { CityDetailsPage } from "@Pages/cityDetails/cityDetails.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route path={RoutePaths.home} element={<HomePage />} />
      <Route path={RoutePaths.cityDetails} element={<CityDetailsPage />} />
      <Route path={RoutePaths.trips} element={<TripsPage />} />
      <Route path={RoutePaths.meetups} element={<MeetupsPage />} />
    </Routes>
  );
};
