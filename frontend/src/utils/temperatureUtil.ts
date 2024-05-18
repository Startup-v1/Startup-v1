import { TemperatureMetric } from "@SharedComponents/navbar/userTemperature";
import { useStore } from "@Store/store";

export function celsiusToFahrenheit(celsius: number) {
  return ((celsius * 9) / 5 + 32).toFixed(1);
}

export const getDegreeSymbol = (userTemperature: TemperatureMetric) =>
  userTemperature === "Celsius" ? "°C" : "°F";

export const Degrees = ({ degrees }: { degrees: number }) => {
  const { userTemperature } = useStore();
  if (userTemperature === "Farenheit") {
    return celsiusToFahrenheit(degrees) + " °F";
  }
  return degrees + " °C";
};
