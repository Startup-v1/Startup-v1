import axios from "axios";
import cheerio from "cheerio";

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

const url = "https://www.numbeo.com/cost-of-living/in/New-York";

(async () => {
  try {
    const scrapedData = await scrapeData(url);
    console.log("Price:", scrapedData);
  } catch (error) {
    console.error("Error scraping data:", error);
  }
})();
