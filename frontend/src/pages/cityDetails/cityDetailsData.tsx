import { City } from "@Pages/home/cities/cities";

type Props = {
  city: City;
};
export const CityDetailsData = ({ city }: Props) => {
  return (
    <div>
      <h1>{city.name}</h1>
      <h2>{city.country.name}</h2>
    </div>
  );
};
