import axios from "axios";
import cheerio from "cheerio";
import initialCities from "../initialCities.js";

async function scrapeData(url) {
  try {
    const response = await axios.get(url);
    const htmlContent = response.data;

    const $ = cheerio.load(htmlContent);

    const apartmentData = $(
      'td:contains("Apartment (1 bedroom) in City Centre")'
    ).next();

    const price = apartmentData.text().trim();

    return price;
  } catch (error) {
    console.error("Error:", error);
  }
}

(async () => {
  try {
    let firstItem;

    // test for first city
    for (const item of initialCities) {
      firstItem = item;
      break; // Exit the loop after the first iteration
    }

    const url = `https://www.numbeo.com/cost-of-living/in/${firstItem}`;

    const scrapedData = await scrapeData(url);
    console.log("Price:", scrapedData);
  } catch (error) {
    console.error("Error scraping data:", error);
  }
})();
