// THIS SCRIPT ADDS POPULATION, COUNTRY, COUNTRYCODE, LATITUDE, LONGITUDE, FLAG AND CURRENCY DATA FOR A LIST OF CITIES PROVIDED.
// IMPORTANT: SUBSCRIBE TO FREE PLAN: https://rapidapi.com/wirefreethought/api/geodb-cities/pricing
// TEST (CHECK THAT THE API KEY IS STILL VALID): https://rapidapi.com/wirefreethought/api/geodb-cities

import axios from "axios";
import fs from "fs";
import initialCities from "../initialCities.js";

console.log("starting script");

// Wait for 1.5 seconds to prevent getting banned
const TIME_BETWEEN_REQUESTS = 1500;
const cities = [];
const missingCities = [];

// Start iterating through cities
iterateCities();

// Iterate through cities and make API calls with a delay of 1.5 second between each call
async function iterateCities() {
  for (const city of initialCities) {
    await new Promise((resolve) => setTimeout(resolve, TIME_BETWEEN_REQUESTS));
    await fetchCityData(city);
  }

  saveFile(JSON.stringify(cities), "cities.json");
  saveFile(JSON.stringify(missingCities), "missingCities.json");
}

async function fetchCityData(cityName) {
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: {
      types: "CITY",
      namePrefix: cityName,
      limit: "1",
      sort: "-population",
    },
    headers: {
      "X-RapidAPI-Key": "b13ca8da4bmsh8d94af49dc11d99p118e7cjsn5d7d3dce874b",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const [cityResponse] = response.data.data;

    const foundCityLower = cityResponse?.city.toLowerCase();
    const cityNameLower = cityName.toLowerCase();
    const regex = new RegExp("\\b" + cityNameLower + "\\b");

    if (isCityFound(foundCityLower, cityNameLower, regex)) {
      await new Promise((resolve) =>
        setTimeout(resolve, TIME_BETWEEN_REQUESTS)
      );
      const flag = await fetchFlag(cityResponse.countryCode);
      await new Promise((resolve) =>
        setTimeout(resolve, TIME_BETWEEN_REQUESTS)
      );
      const currency = await fetchCurrency(cityResponse.countryCode);

      const city = {
        name: cityName,
        population: cityResponse.population,
        country: cityResponse.country,
        countryCode: cityResponse.countryCode,
        latitude: cityResponse.latitude,
        longitude: cityResponse.longitude,
        flag: flag,
        currency: { code: currency.code, symbol: currency.symbol },
      };
      cities.push(city);
    } else {
      cities.push({ name: cityName, population: 0 });
      missingCities.push(cityName);
      console.log("missing :>> ", cityName);
    }
  } catch (error) {
    console.error(error);
  }
}

const isCityFound = (cityResponse, cityInitialData, regex) => {
  return (
    cityResponse === cityInitialData ||
    (cityResponse?.includes(cityInitialData) && cityResponse.match(regex))
  );
};

const saveFile = (jsonData, filePath) => {
  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Cities file created successfully!");
  });
};

async function fetchFlag(countryCode) {
  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}`,
    headers: {
      "X-RapidAPI-Key": "b13ca8da4bmsh8d94af49dc11d99p118e7cjsn5d7d3dce874b",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.flagImageUri;
  } catch (error) {
    console.error(error);
  }
}

async function fetchCurrency(countryCode) {
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/locale/currencies",
    params: { countryId: countryCode },
    headers: {
      "X-RapidAPI-Key": "b13ca8da4bmsh8d94af49dc11d99p118e7cjsn5d7d3dce874b",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const [countryResponse] = response.data.data;
    return countryResponse;
  } catch (error) {
    console.error(error);
  }
}
