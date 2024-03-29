import { countries } from "../countries.js";
import axios from "axios";
import fs from "fs";

const apiKey = "sk-Enl06606987a7b340171";
const url = `https://continentl.com/api/country-list?page=1&key=${apiKey}`;

const fetchLanguages = async () => {
  const countriesFromAPI = (await axios.get(url)).data;
  countries.forEach(({ countryCode }) => {
    // Find the object with the specific name
    let countryFromApi = countriesFromAPI.find(
      (country) => country.code === countryCode
    );

    const countryFromJson = countries.find(
      (country) => country.countryCode === countryCode
    );

    countryFromJson.languages = countryFromApi.official_language;
  });
  saveFile(JSON.stringify(countries));
};

const saveFile = (jsonData) => {
  try {
    fs.writeFileSync(`countries_with_lang.json`, jsonData);
    console.log(`Languages added successfully`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

fetchLanguages();
