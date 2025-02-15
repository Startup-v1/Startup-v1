import { Dispatch, useState } from "react";
import "./sorting.scss";
import { City, Weather } from "../cities";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import { useStore } from "@Store/store";

type Props = {
  setIsSortActive: Dispatch<boolean>;
};

type WeatherStat = "avgTemp" | "totalRain" | "totalSnow";

const defaultSortText = "Sort By";

enum SortingFields {
  Safety = "Safety",
  Population = "Population",
  Temperature = "Temperature",
  Rain = "Rain",
  Snow = "Snow",
}

export const Sorting = ({ setIsSortActive }: Props) => {
  const { cities, updateCities } = useStore();

  const [isSortedDescending, setIsSortedDescending] = useState<boolean>(true);
  const [currentSortValue, setCurrentSortValue] =
    useState<string>(defaultSortText);

  const getIsDesc = (field: SortingFields) =>
    field === currentSortValue ? !isSortedDescending : true;

  const sortyBySafetyIndex = () => {
    //This needs to be saved in a variable as setIsSortedDescending is an async operation and wont instantly update the value of isSortedDescending.
    //Alternatively a useffect hook could be used.
    const isDesc = getIsDesc(SortingFields.Safety);
    setIsSortedDescending(isDesc);

    const sortedData = [...cities].sort((a, b) =>
      isDesc
        ? a.country.safetyIndex - b.country.safetyIndex
        : b.country.safetyIndex - a.country.safetyIndex
    );

    updateCitySortOrder(sortedData);
  };

  const sortyByPopulation = () => {
    const isDesc = getIsDesc(SortingFields.Population);
    setIsSortedDescending(isDesc);

    const sortedData = [...cities].sort((a, b) =>
      isDesc ? b.population - a.population : a.population - b.population
    );

    updateCitySortOrder(sortedData);
  };

  // weatherStat values are comming from the backend
  const sortyByWeather = (
    weatherStat: WeatherStat,
    clickedField: SortingFields
  ) => {
    const isDesc = getIsDesc(clickedField);
    setIsSortedDescending(isDesc);

    if (!cities || cities.length === 0) {
      return [];
    }

    const sortedCities = [...cities].sort((cityA, cityB) => {
      const totalsA = calculateTotalsYearly(cityA.weather, weatherStat);
      const totalsB = calculateTotalsYearly(cityB.weather, weatherStat);

      return isDesc ? totalsB - totalsA : totalsA - totalsB;
    });

    updateCitySortOrder(sortedCities);
  };

  const calculateTotalsYearly = (
    weatherData: Weather[],
    weatherStat: WeatherStat
  ) => {
    if (!weatherData || weatherData.length === 0) {
      return 0;
    }

    const totalYearly = weatherData.reduce((total, monthly) => {
      return total + monthly[weatherStat];
    }, 0);

    if (weatherStat === 'avgTemp') {
      return totalYearly / weatherData.length;
    }

    //For totals instead of avgs
    return totalYearly;
  };

  const updateCitySortOrder = (sortedCities: City[]) => {
    updateCities(sortedCities);
    setIsSortActive(true);
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end sortingContainer mt-12 absolute top-0 right-0 w-[150px] ">
      <button
        disabled={!cities.length}
        tabIndex={0}
        className="btn w-full p-0 btn-accent text-white"
      >
        {currentSortValue}
        {isSortedDescending ? <FaSortAmountDown /> : <FaSortAmountDownAlt />}
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li
          onClick={(e: any) => {
            const value = e.target.innerHTML;
            sortyBySafetyIndex();
            setCurrentSortValue(value);
          }}
        >
          <a>{SortingFields.Safety}</a>
        </li>
        <li
          onClick={(e: any) => {
            const value = e.target.innerHTML;
            sortyByPopulation();
            setCurrentSortValue(value);
          }}
        >
          <a>{SortingFields.Population}</a>
        </li>
        <li
          onClick={(e: any) => {
            const value = e.target.innerHTML;
            sortyByWeather("avgTemp", value);
            setCurrentSortValue(value);
          }}
        >
          <a>{SortingFields.Temperature}</a>
        </li>
        <li
          onClick={(e: any) => {
            const value = e.target.innerHTML;
            sortyByWeather("totalRain", value);
            setCurrentSortValue(value);
          }}
        >
          <a>{SortingFields.Rain}</a>
        </li>
        <li
          onClick={(e: any) => {
            const value = e.target.innerHTML;
            sortyByWeather("totalSnow", value);
            setCurrentSortValue(value);
          }}
        >
          <a>{SortingFields.Snow}</a>
        </li>
      </ul>
    </div>
  );
};
