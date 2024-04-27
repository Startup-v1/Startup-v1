import { Dispatch, useState } from "react";
import "./sorting.scss";
import { City } from "../cities";

type Props = {
  cities: City[];
  setCities: Dispatch<City[]>;
};

export const Sorting = ({ cities, setCities }: Props) => {
  const [isSortedAscending, setIsSortedAscending] = useState<boolean>(true);

  const sortyBySafetyIndex = () => {
    const sortedData = [...cities].sort((a, b) =>
      isSortedAscending
        ? a.country.safetyIndex - b.country.safetyIndex
        : b.country.safetyIndex - a.country.safetyIndex
    );

    setIsSortedAscending(!isSortedAscending);
    setCities(sortedData);
  };

  const sortyByPopulation = () => {
    const sortedData = [...cities].sort((a, b) =>
      isSortedAscending
        ? a.population - b.population
        : b.population - a.population
    );

    setIsSortedAscending(!isSortedAscending);
    setCities(sortedData);
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end sortingContainer mt-12 absolute top-0 right-0 w-[120px] ">
      <div
        tabIndex={0}
        role="button"
        className="btn w-full p-0 btn-accent text-white"
      >
        Sort By
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li onClick={() => sortyBySafetyIndex()}>
          <a>Safety</a>
        </li>
        <li>
          <a>Temperature</a>
        </li>
        <li>
          <a>Humidity</a>
        </li>
        <li>
          <a>Rain</a>
        </li>
        <li>
          <a>Snow</a>
        </li>
        <li onClick={() => sortyByPopulation()}>
          <a>Population</a>
        </li>
      </ul>
    </div>
  );
};
