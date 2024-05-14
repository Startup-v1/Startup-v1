import { Route, Routes } from "react-router-dom";
import { Home } from "@Pages/home/home.tsx";
import { Trips } from "@Pages/trips/trips.tsx";
import { Meetups } from "@Pages/meetups/meetups";
import { RoutePaths } from "./routePaths.ts";
import { CityDetails } from "@Pages/cityDetails/cityDetails.tsx";

export const Router = () => (
  <Routes>
    <Route path={RoutePaths.home} element={<Home />} />
    <Route path={RoutePaths.cityDetails} element={<CityDetails />} />
    <Route path={RoutePaths.trips} element={<Trips />} />
    <Route path={RoutePaths.meetups} element={<Meetups />} />
  </Routes>
);
