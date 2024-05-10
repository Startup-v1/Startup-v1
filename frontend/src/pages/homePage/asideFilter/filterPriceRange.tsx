import "./filterPriceRange.scss";
import Slider from "react-slider";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const MIN = 0;
const MAX = 10000;

export function FilterPriceRange() {
  const [values, setValues] = useState([MIN, MAX]);
  const [isMinInputEmpty, setIsMinInputEmpty] = useState(false);
  const [isMaxInputEmpty, setIsMaxInputEmpty] = useState(false);

  const handleMinInputChange = (value: string | undefined) => {
    if (!value || parseInt(value.toString()) === 0) {
      setValues([MIN, values[1] > MAX ? MAX : values[1]]);
      setIsMinInputEmpty(true);
      return;
    }
    setIsMinInputEmpty(false);
    const parsedValue = parseInt(value!.replace(/[^\d]/g, ""));
    setValues([parsedValue, values[1] > parsedValue ? values[1] : parsedValue]);
  };

  const handleMaxInputChange = (value: string | undefined) => {
    if (!value || parseInt(value.toString()) === 0) {
      setValues([values[0] < MIN ? MIN : values[0], MAX]);
      setIsMaxInputEmpty(true);
      return;
    }
    setIsMaxInputEmpty(false);
    const parsedValue = parseInt(value!.replace(/[^\d]/g, ""));
    setValues([values[0] < parsedValue ? values[0] : parsedValue, parsedValue]);
  };

  const handleMinInputFocus = () => {
    if (isMinInputEmpty) {
      setValues(["", values[1] > MAX ? MAX : values[1]]);
    }
  };

  const handleMaxInputFocus = () => {
    if (isMaxInputEmpty) {
      setValues([values[0] < MIN ? MIN : values[0], ""]);
    }
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
                value={
                  isMinInputEmpty && values[0] !== ""
                    ? ""
                    : values[0].toString()
                }
                onValueChange={handleMinInputChange}
                onFocus={handleMinInputFocus}
                prefix="€"
                placeholder="0€"
                decimalsLimit={0}
              />
            </div>
            <div className="separator"> - </div>
            <div className="field">
              <CurrencyInput
                className="input-min"
                value={
                  isMaxInputEmpty && values[1] !== ""
                    ? ""
                    : values[1].toString()
                }
                onValueChange={handleMaxInputChange}
                onFocus={handleMaxInputFocus}
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
