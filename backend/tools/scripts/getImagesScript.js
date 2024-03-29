// API DOCS: https://www.pexels.com/api/documentation
// IMPORTANT: After running the script remember to check for empty object {} values to spot cities that returned no results

import fs from "fs";
import { createClient } from "pexels";
// Create a JS file exporting the json object
import { cities } from "../cities.js";

const TIME_BETWEEN_REQUESTS = 3000;
const MAX_RETRY_ATTEMPTS = 100; // Maximum number of retry attempts per city

// 2 different api keys to be able to do more requests!!
const apiKey1 = "LcwBtWHFBCIKT6AnV0zBmlHK1MRFdICPnhuWDG4QbDo6WBJouH1ZRNv9";
const apiKey2 = "fAcyXSvypvGfBvMsy3AG209vn6QWQnD5dRfhPhfzcR1OH9ieU7YvQFfc";

let activeKey = apiKey1;
let activeClient = createClient(apiKey1);

iterateCities();
console.log("Requests started... :>> ");

// Iterate through cities and make API calls with a delay of TIME_BETWEEN_REQUESTS between each call
async function iterateCities() {
  for (const city of cities) {
    await new Promise((resolve) => setTimeout(resolve, TIME_BETWEEN_REQUESTS));
    await fetchImage(city.name);
  }
}

async function fetchImage(cityName, retryAttempt = 1) {
  try {
    const photos = await activeClient.photos.search({
      query: cityName,
      per_page: 1,
      orientation: "landscape",
    });

    const { medium, large2x } = photos.photos[0]?.src ?? {};

    // Find the object with the specific name
    let currentCity = cities.find(
      (cityFromJson) => cityFromJson.name === cityName
    );
    currentCity.photoUrl = { small: medium, large: large2x };

    saveFile(cityName, JSON.stringify(cities));
  } catch (error) {
    console.error(`Error fetching ${cityName} photo:`, error);
    if (retryAttempt <= MAX_RETRY_ATTEMPTS) {
      console.log(
        `Retrying ${cityName} (${retryAttempt}/${MAX_RETRY_ATTEMPTS})...`
      );
      await new Promise((resolve) => setTimeout(resolve, 15000));
      toggleClients();
      await fetchImage(cityName, retryAttempt + 1); // Retry with incremented attempt count
    } else {
      throw new Error(
        `Max retry attempts reached for ${cityName}. Stopping script.`
      );
    }
  }
}

const saveFile = (cityName, jsonData) => {
  try {
    fs.writeFileSync(`cities_with_images.json`, jsonData);
    console.log(`${cityName} photos added successfully`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

const toggleClients = () => {
  activeKey = activeKey === apiKey1 ? apiKey2 : apiKey1;
  activeClient = createClient(activeKey);
  console.log("Client changed!");
};
