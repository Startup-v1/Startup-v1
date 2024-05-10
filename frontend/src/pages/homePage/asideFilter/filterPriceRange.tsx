import "./filterPriceRange.scss";
import Slider from "react-slider";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const MIN = 0;
const MAX = 10000;

export function FilterPriceRange() {
  const [values, setValues] = useState([MIN, MAX]);

  const handleMinInputChange = (value: string | undefined) => {
    const parsedValue = value ? parseInt(value.replace(/[^\d]/g, "")) : MIN;
    const newMinValue = Math.min(parsedValue, values[1]); // Asegurarse de que el valor mínimo no sea mayor que el valor máximo
    setValues([newMinValue, values[1]]);
  };

  const handleMaxInputChange = (value: string | undefined) => {
    const parsedValue = value ? parseInt(value.replace(/[^\d]/g, "")) : MAX;
    const newMaxValue = Math.max(parsedValue, values[0]); // Asegurarse de que el valor máximo no sea menor que el valor mínimo
    setValues([values[0], newMaxValue]);
  };

  return (
    <div className="p-4 bg-gray-500">
      <p className="font-bold pb-2">Price</p>
      <div className="app">
        <div className="box">
          <Slider
            className={"slider"}
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
          />
          <div className="price-input">
            <div className="field">
              <CurrencyInput
                className="input-min"
                value={values[0].toString()}
                onValueChange={handleMinInputChange}
                prefix="€"
                placeholder="0€"
                decimalsLimit={0}
              />
            </div>
            <div className="separator"> - </div>
            <div className="field">
              <CurrencyInput
                className="input-min"
                value={values[1].toString()}
                onValueChange={handleMaxInputChange}
                prefix="€"
                placeholder="10000€"
                decimalsLimit={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
