import { City } from "@Pages/home/cities/cities";
import { create } from "zustand";
import { Currency } from "src/utils/currencies";
import { TemperatureMetric } from "@SharedComponents/navbar/userTemperature";

interface Store {
  cities: City[];
  updateCities: (cities: City[]) => void;
  userTemperature: TemperatureMetric;
  updateUserTemperature: (userTemperature: TemperatureMetric) => void;
  userCurrency: Currency;
  updateUserCurrency: (userCurrency: Currency) => void;
}

export const useStore = create<Store>((set) => ({
  cities: [],
  updateCities: (cities) => set({ cities }),
  userTemperature: "Celsius",
  updateUserTemperature: (userTemperature) => set({ userTemperature }),
  userCurrency: {
    code: "USD",
    symbol: "$",
  },
  updateUserCurrency: (userCurrency) => set({ userCurrency }),
}));
