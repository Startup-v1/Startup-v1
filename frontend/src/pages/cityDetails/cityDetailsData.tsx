import { City } from "@Pages/home/cities/cities";

type Props = {
  city: City;
};
export const CityDetailsData = ({ city }: Props) => {
  return (
    <>
      <h1 className="flex items-center text-3xl font-bold mt-12 mb-4">
        {city.name}, {city.country.name}{" "}
        <img className="ml-4 w-[35px]" src={city.country.flag} alt="flag" />
      </h1>
      <div>
        <div>
          <span className="font-bold">Continent: </span>
          {city.country.continent.name}
        </div>
        <div>
          <span className="font-bold">Population: </span>
          {city.population.toLocaleString("en-US")}
        </div>
        <div>
          <span className="font-bold">Safety index: </span>
          {city.country.safetyIndex}
        </div>
        <div>
          <span className="font-bold">Currency: </span>
          {city.country.currency.usdPair}
          {city.country.currency.symbol} = 1$
        </div>
        <div>
          <span className="font-bold">Languages: </span>
          {city.country.languages}
        </div>
        <div>
          <span className="font-bold">Coordinates: </span>latitude{" "}
          {city.location.latitude} / longitude {city.location.longitude}
        </div>
      </div>
    </>
  );
};
