// THIS SCRIPT GETS THE VALUE OF 1 DOLAR FOR A SET OF CURRENCIES E.G. 1 DOLLAR = 0.93 EUROS
import { countries } from "../countries.js";
import axios from "axios";
import fs from "fs";

const apiKey = "sk-Enl06606987a7b340171";
const url = `https://continentl.com/api/currency-exchange-details/USD?key=${apiKey}`;

const fetchCurrencyUSDPairs = async () => {
  const currencyPairs = (await axios.get(url)).data.exchange;
  countries.forEach((country) => {
    const currency = currencyPairs.find(
      (currency) => currency.code === country.currency.code
    );
    if (currency) {
      country.currency.usdPair = currency.amount;
    }
  });
  saveFile(JSON.stringify(countries));
};

const saveFile = (jsonData) => {
  try {
    fs.writeFileSync(`countries_with_currency_pairs.json`, jsonData);
    console.log(`Currency pairs added successfully`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

fetchCurrencyUSDPairs();
