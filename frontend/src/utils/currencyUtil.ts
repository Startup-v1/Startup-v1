export interface Currency {
  code: string;
  symbol: string;
}

export const popularCurrencies: Currency[] = [
  {
    code: "USD",
    symbol: "$",
  },
  {
    code: "EUR",
    symbol: "€",
  },
  {
    code: "JPY",
    symbol: "¥",
  },
  {
    code: "GBP",
    symbol: "£",
  },
  {
    code: "AUD",
    symbol: "A$",
  },
  {
    code: "CAD",
    symbol: "CA$",
  },
  {
    code: "CHF",
    symbol: "CHF",
  },
  {
    code: "CNY",
    symbol: "CN¥",
  },
  {
    code: "HKD",
    symbol: "HK$",
  },
  {
    code: "NZD",
    symbol: "NZ$",
  },
];
