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
const timeBetweenRequests = 5;

function cleanData(data) {
  return data
    .text()
    .trim()
    .replace(/\u00A0/g, "");
}

async function scrapeData(url) {
  try {
    const response = await axios.get(url);
    const htmlContent = response.data;

    const $ = cheerio.load(htmlContent);

    const monthlyCost = $(
      'li:contains("A single person estimated monthly costs are")'
    ).children();

    const mealInexpensive = $(
      'td:contains("Meal, Inexpensive Restaurant")'
    ).next();

    const taxiStart = $('td:contains("Taxi Start (Normal Tariff)")').next();

    const taxiOneKm = $('td:contains("Taxi 1km (Normal Tariff)")').next();

    const apartmentOneBedroom = $(
      'td:contains("Apartment (1 bedroom) in City Centre")'
    ).next();

    const netSalary = $(
      'td:contains("Average Monthly Net Salary (After Tax)")'
    ).next();

    let monthlyCostData = monthlyCost.text().trim();
    monthlyCostData = monthlyCostData
      .substring(0, monthlyCostData.indexOf("("))
      .trim();

    const mealInexpensiveData = cleanData(mealInexpensive);
    const taxiStartData = cleanData(taxiStart)
    const taxiOneKmData = cleanData(taxiOneKm)
    const apartmentOneBedroomData = cleanData(apartmentOneBedroom)
    const netSalaryData = cleanData(netSalary)

    const cityObject = {
      monthlyCost: monthlyCostData,
      mealInexpensive: mealInexpensiveData,
      taxiStart: taxiStartData,
      taxiOneKm: taxiOneKmData,
      apartmentOneBedroom: apartmentOneBedroomData,
      netSalary: netSalaryData,
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
      cityData.costOfLiving = {
        netSalary: data2[cityName].netSalary,
        apartmentOneBedroom: data2[cityName].apartmentOneBedroom,
        monthlyCost: data2[cityName].monthlyCost,
        mealInexpensive: data2[cityName].mealInexpensive,
        taxiStart: data2[cityName].taxiStart,
        taxiOneKm: data2[cityName].taxiOneKm,
      };
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

      if (scrapedData.netSalary === "") {
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
