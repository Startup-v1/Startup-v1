import { City } from "@Pages/home/cities/cities";

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
        <div className="text-gray-700">
          <span className="font-bold">Safety index: </span>
          {city.country.safetyIndex}
        </div>
        <div className="text-gray-700">
          <span className="font-bold">Currency: </span>
          {city.country.currency.usdPair}
          {city.country.currency.symbol} = 1$
        </div>
        <div className="text-gray-700">
          <span className="font-bold">Official languages: </span>
          {city.country.languages}
        </div>
        <div className="text-gray-700">
          <span className="font-bold">Lat, Long: </span>
          {city.location.latitude.toFixed(2)},{" "}
          {city.location.longitude.toFixed(2)}
        </div>
      </div>
    </>
  );
};
