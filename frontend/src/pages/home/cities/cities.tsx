import { useEffect, useState } from "react";
import "./cities.scss";
import axios from "axios";
import { Sorting } from "./sorting/sorting";
import { apiUrl } from "src/urls";
import { Link } from "react-router-dom";
import { useStore } from "@Store/store";
import { SafetyIndexIcon } from "@SharedComponents/safetyIndexIcon";
import { LoadingSpinner } from "@SharedComponents/loadingSpinner";
import { Degrees } from "src/utils/temperatureUtil";

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  country: {
    countryCode: string;
    name: string;
    flag: string;
    safetyIndex: number;
    languages: string[];
    continent: { name: string; code: string };
    currency: {
      code: string;
      symbol: string;
      usdPair: number;
    };
  };
  population: number;
  photoUrl: {
    small: string;
    large: string;
  };
  weather: Weather[];
};

export type Weather = {
  minTemp: number;
  maxTemp: number;
  avgTemp: number;
  totalRain: number;
  totalSnow: number;
};

type YearlyWeather = {
  yearlyMinTemp: number;
  yearlyMaxTemp: number;
};

export const CitiesGrid = () => {
  const { cities, updateCities } = useStore();

  const [isSortActive, setIsSortActive] = useState<boolean>(false);

  const calculateYearlyTemperatures = (city: City): YearlyWeather => {
    // Set defaults
    let minTemp = Infinity;
    let maxTemp = -Infinity;

    city?.weather?.forEach((monthlyWeather) => {
      minTemp = Math.floor(Math.min(minTemp, monthlyWeather.minTemp));
      maxTemp = Math.ceil(Math.max(maxTemp, monthlyWeather.maxTemp));
    });

    return {
      yearlyMinTemp: minTemp,
      yearlyMaxTemp: maxTemp,
    };
  };

  useEffect(() => {
    if (cities.length === 0) {
      const fetchData = async () => {
        try {
          const cities = (await axios.get(apiUrl.cities)).data;
          updateCities(cities);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [cities, updateCities]);

  return (
    <div className="relative m-auto mt-0 w-[1280px]">
      <Sorting setIsSortActive={setIsSortActive} />
      {!cities.length && (
        <div className="flex-center flex-col mt-64">
          <span className="mb-6">Retrieving cities...</span>
          <LoadingSpinner />
        </div>
      )}
      <section className="flex justify-center mt-28 container">
        <div className="grid gap-4 grid-cols-3 gap-x-16 gap-y-16 auto-rows-fr">
          {cities.map((city, i) => {
            return (
              <Link
                to={`/city/${city.name.toLowerCase()}`}
                key={city.name}
                className="card w-96 bg-base-100 shadow-xl image-full"
              >
                <figure>
                  <img src={city.photoUrl.small} alt="city" />
                </figure>
                <div className="card-body flex-center">
                  <h1 className="cityName">{city.name}</h1>
                  <h2 className="cityCountry font-bold">{city.country.name}</h2>
                  <div className="absolute bottom-5 left-5">
                    <span className="mr-2 font-bold">
                      Min{" "}
                      <Degrees
                        degrees={
                          calculateYearlyTemperatures(city).yearlyMinTemp
                        }
                      />
                    </span>
                    <span className="font-bold">
                      Max{" "}
                      <Degrees
                        degrees={
                          calculateYearlyTemperatures(city).yearlyMaxTemp
                        }
                      />
                    </span>
                  </div>
                  {isSortActive && (
                    <div className="flex-center absolute top-4 left-4 font-bold rounded-full w-[35px] h-[35px] bg-[#00d7c059] bg-opacity-25">
                      {i + 1}
                    </div>
                  )}
                  <div className="flex-center absolute top-5 right-5 font-bold">
                    <span>Safety</span>
                    <SafetyIndexIcon safetyIndex={city.country.safetyIndex} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
