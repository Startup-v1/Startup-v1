import { TemperatureMetric } from "@SharedComponents/navbar/userTemperature";
import { useStore } from "@Store/store";

export function celsiusToFahrenheit(celsius: number) {
  return Number(((celsius * 9) / 5 + 32).toFixed(1));
}

// React component
export const Degrees = ({ degrees }: { degrees: number }) => {
  const { userTemperature } = useStore();
  return getDegrees(degrees, userTemperature);
};

// Function
export const getDegrees = (
  degrees: number,
  userTemperature: TemperatureMetric
) => {
  if (userTemperature === "Fahrenheit") {
    return celsiusToFahrenheit(degrees) + " °F";
  }
  return degrees + " °C";
};
