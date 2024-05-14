import { useParams } from "react-router-dom";
import { CityDetailsHeader } from "./cityDetailsHeader";
import { City } from "@Pages/home/cities/cities";
import { CityDetailsData } from "./cityDetailsData";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "src/urls";
import { WeatherCharts } from "./charts/cityDetailsCharts";

export const CityDetails = () => {
  //TODO: Handle url with wrong city name e.g. /city/testCityBlahblah
  const { name } = useParams();
  const [city, setCity] = useState<City>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = apiUrl.city + "/" + name;
        const city = (await axios.get(url)).data;
        setCity(city);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  return (
    city && (
      <>
        <CityDetailsHeader photoUrl={city.photoUrl.large} />
        <div className="page-container m-auto">
          <CityDetailsData city={city} />
          <WeatherCharts data={city.weather} />
        </div>
      </>
    )
  );
};
