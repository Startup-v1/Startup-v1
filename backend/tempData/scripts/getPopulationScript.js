// THIS SCRIPT ADDS POPULATION DATA FOR A LIST OF CITIES PROVIDED
// IMPORTANT: SUBSCRIBE TO FREE PLAN: https://rapidapi.com/wirefreethought/api/geodb-cities/pricing
// TEST (CHECK THAT THE API KEY IS STILL VALID): https://rapidapi.com/wirefreethought/api/geodb-cities

import axios from "axios";
import fs from "fs";
import initialCities from "./initialCities.js";

const cities = [];
const missingCities = [];

// Start iterating through cities
iterateCities();

// Iterate through cities and make API calls with a delay of 1.5 second between each call
async function iterateCities() {
  for (const city of initialCities) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Wait for 1.5 seconds to prevent getting banned
    await makeDelayedAPICall(city);
  }

  saveFile(JSON.stringify(cities), "cities.json");
  saveFile(JSON.stringify(missingCities), "missingCities.json");
}

async function makeDelayedAPICall(cityName) {
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
      "X-RapidAPI-Key": "8b0b992babmshf7516849a2d8c59p1e08bfjsna42e0502b916",
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
      cities.push({ name: cityName, population: cityResponse.population });
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
