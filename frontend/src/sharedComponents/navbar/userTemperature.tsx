import { RiCelsiusLine } from "react-icons/ri";
import { RiFahrenheitLine } from "react-icons/ri";
import { useStore } from "@Store/store";
import { useEffect } from "react";

export type TemperatureMetric = "Celsius" | "Fahrenheit";

export const UserTemperature = () => {
  const { userTemperature, updateUserTemperature } = useStore();

  useEffect(() => {
    const userTemperatureFromStorage = localStorage.getItem("userTemperature");

    if (userTemperatureFromStorage) {
      updateUserTemperature(userTemperatureFromStorage as TemperatureMetric);
    }
  }, []);

  return (
    <label className="swap btn p-2 rounded-md min-h-8 max-h-8 mr-1">
      <input
        className="hidden"
        type="checkbox"
        checked={userTemperature === "Celsius"}
        onChange={(e) => {
          const selectedTemperature = e.target.checked
            ? "Celsius"
            : "Fahrenheit";
          updateUserTemperature(selectedTemperature);
          localStorage.setItem("userTemperature", selectedTemperature);
        }}
      />
      <div className="swap-on">
        <RiCelsiusLine />
      </div>
      <div className="swap-off">
        <RiFahrenheitLine />
      </div>
    </label>
  );
};
