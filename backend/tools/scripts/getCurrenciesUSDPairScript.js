// THIS SCRIPT GETS THE VALUE OF 1 DOLAR FOR A SET OF CURRENCIES E.G. 1 DOLLAR = 0.93 EUROS
import axios from "axios";

const apiKey = "sk-Enl06606987a7b340171";
const url = `https://continentl.com/api/currency-exchange-details/USD?key=${apiKey}`;

const fetchCurrencyUSDPairs = async () => {
  const currencyPairs = (await axios.get(url)).data.exchange;
  //TODO: SAVE DATA SOMEWHERE
};

fetchCurrencyUSDPairs();
