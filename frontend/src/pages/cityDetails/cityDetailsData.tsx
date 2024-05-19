import { City } from "@Pages/home/cities/cities";
import { SafetyIndexIcon } from "@SharedComponents/safetyIndexIcon";
import { getSafetyString } from "src/utils/safetyIndexUtils";
import { IoInformationCircleSharp } from "react-icons/io5";

type Props = {
  city: City;
};
export const CityDetailsData = ({ city }: Props) => {
  return (
    <>
      <h1 className="flex items-center text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-12 mb-4">
        {city.name}, {city.country.name}{" "}
        <img className="ml-4 w-[35px]" src={city.country.flag} alt="flag" />
      </h1>
      <div>
        <div className="text-gray-700">
          <span className="font-bold">Continent: </span>
          {city.country.continent.name}
        </div>
        <div className="text-gray-700">
          <span className="font-bold">Population: </span>
          {city.population.toLocaleString("en-US")}
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-bold">Safety: </span>
          <SafetyIndexIcon safetyIndex={city.country.safetyIndex} />
          <span className="ml-1">
            {getSafetyString(city.country.safetyIndex)}
          </span>
          <div className="tooltip" data-tip={`Safety index ${city.country.safetyIndex}`}>
            <IoInformationCircleSharp size={19} className="ml-1 mt-[1px]" />
          </div>
        </div>
        <div className="text-gray-700">
          <span className="font-bold">Official languages: </span>
          {city.country.languages}
        </div>
        <div className="text-gray-700">
          <span className="font-bold">Currency: </span>
          {city.country.currency.code} - {city.country.currency.symbol}
        </div>
      </div>
    </>
  );
};
