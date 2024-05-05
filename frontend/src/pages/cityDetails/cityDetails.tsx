import { useStore } from "@Store/store";
import { useParams } from "react-router-dom";
import { CityDetailsHeader } from "./cityDetailsHeader";
import { City } from "@Pages/home/cities/cities";
import { CityDetailsData } from "./cityDetailsData";

export const CityDetails = () => {
  //TODO: Handle url with wrong city name e.g. /city/testCityBlahblah
  const { cities } = useStore();
  const { name } = useParams();

  const city = cities.find((city) => city.name.toLowerCase() === name) as City;

  return (
    <>
      <CityDetailsHeader photoUrl={city.photoUrl.large} />
      <div className="container">
        <CityDetailsData city={city} />
      </div>
    </>
  );
};
