// IMPORTANT
// *****************************************************
// *****************************************************
// execute from the dir of the script
// not from the root of the project

import axios from "axios";
import cheerio from "cheerio";
import initialCities from "../initialCities.js";
import fs from "fs";

// modify if needed
const timeBetweenRequests = 50;

async function scrapeData(url) {
  try {
    const response = await axios.get(url);
    const htmlContent = response.data;

    const $ = cheerio.load(htmlContent);

    const apartmentData = $(
      'td:contains("Average Monthly Net Salary (After Tax)")'
    ).next();

    const monthlyCostData = $(
      'li:contains("A single person estimated monthly costs are")'
    ).children();

    const apartmentDataPrice = apartmentData.text().trim();
    const apartmentDataPriceTrim = apartmentDataPrice.replace(/\u00A0/g, "");
    const monthlyCostDataPrice = monthlyCostData.text().trim();
    const monthlyCostDataPriceTrim = monthlyCostDataPrice
      .substring(0, monthlyCostDataPrice.indexOf("("))
      .trim();

    const cityObject = {
      apartment: apartmentDataPriceTrim,
      monthlyCost: monthlyCostDataPriceTrim,
    };

    return cityObject;
  } catch (error) {
    console.error("Error:", error);
  }
}

const saveFile = (data, missing) => {
  try {
    fs.writeFileSync(`cities_cost_of_living.json`, data);
    console.log(`Data saved!`);
    console.log(`${missing}/${initialCities.size} cities missing.`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

function removeTildes(str) {
  const accentedCharsMap = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };

  return str.replace(/[áéíóúÁÉÍÓÚ]/g, (match) => accentedCharsMap[match]);
}

function addCostOfLivingToFile(firstFilePath, secondFilePath, outputPath) {
  const data1 = JSON.parse(fs.readFileSync(firstFilePath, "utf8"));
  const data2 = JSON.parse(fs.readFileSync(secondFilePath, "utf8"));

  data1.forEach((cityData) => {
    const cityName = cityData.name;
    if (data2.hasOwnProperty(cityName)) {
      if (data2[cityName].hasOwnProperty("apartment")) {
        cityData.costOfLiving = {
          apartment: data2[cityName].apartment,
          monthlyCost: data2[cityName].monthlyCost,
        };
      } else {
        cityData.costOfLiving = "no data"
      }
    }
  });

  fs.writeFileSync(outputPath, JSON.stringify(data1, null, 4));
}

(async () => {
  try {
    let scrapedData;
    let currentCity;
    let citiesCostOfLiving = {};
    let citiesMissing = 0;

    console.log("Initializing script.");
    console.log("Fetching data...");

    for (const city of initialCities) {
      currentCity = removeTildes(
        city
          .split(" ")
          .join("-")
          .replace(/\bde\b/g, "De")
      );

      const url = `https://www.numbeo.com/cost-of-living/in/${currentCity}?displayCurrency=USD`;
      scrapedData = await scrapeData(url);

      if (scrapedData.apartment === "") {
        citiesCostOfLiving[city] = "no data";
        citiesMissing++;
        console.log(`${currentCity} ❌`);
      } else {
        console.log(`${currentCity} ✅`);

        citiesCostOfLiving[city] = scrapedData;
      }
      await new Promise((resolve) => setTimeout(resolve, timeBetweenRequests));
    }

    saveFile(JSON.stringify(citiesCostOfLiving), citiesMissing);

    const firstFilePath = "./../cities.json";
    const secondFilePath = "./cities_cost_of_living.json";
    const outputPath = "./cities.json";
    addCostOfLivingToFile(firstFilePath, secondFilePath, outputPath);
  } catch (error) {
    console.error("Error scraping data:", error);
  }
})();
