import axios from "axios";

async function scrapeData(url) {
    try {
        const response = await axios.get(url);
        const htmlContent = response.data;
        console.log(htmlContent);

    } catch (error) {
        console.error('Error:', error);
    }
}

const url = 'https://www.numbeo.com/cost-of-living/in/New-York';

scrapeData(url)
    .then((data) => {
        console.log('Scraped data:', data);
    })
    .catch((error) => {
        console.error('Error scraping data:', error);
    });
