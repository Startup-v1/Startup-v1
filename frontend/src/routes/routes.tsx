import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "../toplevelcomponents/homePage/homePage";
import { ProfilePage } from "../toplevelcomponents/profilePage/profilePage";
import { MeetupsPage } from "../toplevelcomponents/meetupsPage/meetupsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="meetups" element={<MeetupsPage />} />
    </>
  )
);
