import { useStore } from "@Store/store";
import { useParams } from "react-router-dom";

export const CityDetails = () => {
  const { cities } = useStore();
  const { name } = useParams();

  const test = cities.find((city) => city.name.toLowerCase() === name);
  console.log("test :>> ", test);

  return <div>DETAILS {name}</div>;
};
