import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "../components/homePage/homePage";
import { ProfilePage } from "../components/profilePage/profilePage";
import { MeetupsPage } from "../components/meetupsPage/meetupsPage";

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
