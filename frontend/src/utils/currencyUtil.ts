interface Currency {
  code: string;
  symbol: string;
  usdToCurrencyPair: number;
}

export const popularCurrencies: Currency[] = [
  {
    code: "USD",
    symbol: "$",
    usdToCurrencyPair: 1,
  },
  {
    code: "EUR",
    symbol: "€",
    usdToCurrencyPair: 0.92,
  },
  {
    code: "JPY",
    symbol: "¥",
    usdToCurrencyPair: 155.68,
  },
  {
    code: "GBP",
    symbol: "£",
    usdToCurrencyPair: 0.79,
  },
  {
    code: "AUD",
    symbol: "A$",
    usdToCurrencyPair: 1.49,
  },
  {
    code: "CAD",
    symbol: "CA$",
    usdToCurrencyPair: 1.36,
  },
  {
    code: "CHF",
    symbol: "CHF",
    usdToCurrencyPair: 0.91,
  },
  {
    code: "CNY",
    symbol: "CN¥",
    usdToCurrencyPair: 7.22,
  },
  {
    code: "HKD",
    symbol: "HK$",
    usdToCurrencyPair: 7.80,
  },
  {
    code: "NZD",
    symbol: "NZ$",
    usdToCurrencyPair: 1.63,
  },
];
