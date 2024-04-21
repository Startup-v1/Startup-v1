import axios from "axios";
import cheerio from "cheerio";
import initialCities from "../initialCities.js";

async function scrapeData(url) {
  try {
    const response = await axios.get(url);
    const htmlContent = response.data;

    const $ = cheerio.load(htmlContent);

    const apartmentData = $(
      'td:contains("Average Monthly Net Salary (After Tax)")'
    ).next();

    const price = apartmentData.text().trim();

    return price;
  } catch (error) {
    console.error("Error:", error);
  }
}

(async () => {
  try {
    let citiesMissing = [];
    let scrapedData;
    let currentCity = "";

    for (const city of initialCities) {
      currentCity = city.split(" ").join("-");
      const url = `https://www.numbeo.com/cost-of-living/in/${currentCity}`;
      scrapedData = await scrapeData(url);

      if (scrapedData === "") {
        citiesMissing.push(city);
      } else {
        console.log("Price:", scrapedData);
      }

      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    
  } catch (error) {
    console.error("Error scraping data:", error);
  }
})();
