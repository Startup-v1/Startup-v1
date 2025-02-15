import { City } from "@Pages/home/cities/cities";
import { create } from "zustand";
import { TemperatureMetric } from "@SharedComponents/navbar/userTemperature";

interface Store {
  cities: City[];
  updateCities: (cities: City[]) => void;
  userTemperature: TemperatureMetric;
  updateUserTemperature: (userTemperature: TemperatureMetric) => void;
  userCurrency: string;
  updateUserCurrency: (userCurrency: string) => void;
}

export const useStore = create<Store>((set) => ({
  cities: [],
  updateCities: (cities) => set({ cities }),
  userTemperature: "Celsius",
  updateUserTemperature: (userTemperature) => set({ userTemperature }),
  userCurrency: "USD",
  updateUserCurrency: (userCurrency) => set({ userCurrency }),
}));
