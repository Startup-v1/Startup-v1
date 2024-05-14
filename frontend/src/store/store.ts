import { City } from "@Pages/home/cities/cities";
import { create } from "zustand";

interface Store {
  cities: City[];
  updateCities: (cities: City[]) => void;
}

export const useStore = create<Store>((set) => ({
  cities: [],
  updateCities: (cities) => set({ cities: cities }),
}));
