import { useEffect, useState } from "react";
import "./cities.scss";
import axios from "axios";

type City = {
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


export const CitiesGrid = () => {
  const [cities, setCities] = useState([] as City[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: Get URL dinamically
        const cities = (await axios.get("http://localhost:3000/api/cities")).data;
        setCities(cities)
        console.log(cities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex justify-center mt-28 container">
      <div className="grid gap-4 grid-cols-3 gap-x-16 gap-y-16 auto-rows-fr">
        {cities.map((city) => {
          return (
            <div
              key={city.name}
              className="card w-96 bg-base-100 shadow-xl image-full"
            >
              <figure>
                <img
                  src={city.photoUrl.small}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex-center">
                <h1 className="cityName">{city.name}</h1>
                <h2 className="cityCountry">{city.country.name}</h2>
                {/* <span className="cityCost">{city.cost} USD$/month</span> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
