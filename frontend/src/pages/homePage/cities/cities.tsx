import { useEffect, useState } from "react";
import "./cities.scss";
import axios from "axios";
import greenDot from "@Assets/safetyIndexIcons/green.png";
import yellowDot from "@Assets/safetyIndexIcons/yellow.png";
import redDot from "@Assets/safetyIndexIcons/red.png";
import { Sorting } from "./sorting/sorting";
import { urls } from "src/urls";

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
    continent: string;
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
  weather: {
    minTemp: number;
    maxTemp: number;
    avgTemp: number;
    totalRain: number;
    totalSnow: number;
    avgHumidity: number;
  }[];
};

type YearlyWeather = {
  yearlyMinTemp: number;
  yearlyMaxTemp: number;
};

export const CitiesGrid = () => {
  const [cities, setCities] = useState([] as City[]);
  const [isSortActive, setIsSortActive] = useState<boolean>(false);

  const calculateYearlyTemperatures = (city: City): YearlyWeather => {
    // Set defaults
    let minTemp = Infinity;
    let maxTemp = -Infinity;

    city.weather.forEach((monthlyWeather) => {
      minTemp = Math.floor(Math.min(minTemp, monthlyWeather.minTemp));
      maxTemp = Math.ceil(Math.max(maxTemp, monthlyWeather.maxTemp));
    });

    return {
      yearlyMinTemp: minTemp,
      yearlyMaxTemp: maxTemp,
    };
  };

  const calculateSafetyIndexRange = (safetyIndex: number) => {
    const imageSource =
      safetyIndex > 13 ? redDot : safetyIndex > 10.2 ? yellowDot : greenDot;
    return <img className="ml-1" src={imageSource} alt={`${imageSource}`} />;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cities = (await axios.get(urls.cities)).data;
        setCities(cities);
        console.log(cities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative m-auto">
      <Sorting
        cities={cities}
        setCities={setCities}
        setIsSortActive={setIsSortActive}
      />
      <section className="flex justify-center mt-28 container">
        <div className="grid gap-4 grid-cols-3 gap-x-16 gap-y-16 auto-rows-fr">
          {cities.map((city, i) => {
            return (
              <div
                key={city.name}
                className="card w-96 bg-base-100 shadow-xl image-full"
              >
                <figure>
                  <img src={city.photoUrl.small} alt="Shoes" />
                </figure>
                <div className="card-body flex-center">
                  <h1 className="cityName">{city.name}</h1>
                  <h2 className="cityCountry font-bold">{city.country.name}</h2>
                  <div className="absolute bottom-5 left-5">
                    <span className="mr-1 font-bold">
                      Min {calculateYearlyTemperatures(city).yearlyMinTemp}°
                    </span>
                    <span className="font-bold">
                      Max {calculateYearlyTemperatures(city).yearlyMaxTemp}°
                    </span>
                  </div>
                  {isSortActive && (
                    <div className="absolute top-4 left-4 flex justify-center items-center font-bold rounded-full w-[35px] h-[35px] bg-[#00d7c059] bg-opacity-25">
                      {i + 1}
                    </div>
                  )}
                  <div className="absolute top-5 right-5 flex justify-center items-center font-bold">
                    Safety {calculateSafetyIndexRange(city.country.safetyIndex)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
