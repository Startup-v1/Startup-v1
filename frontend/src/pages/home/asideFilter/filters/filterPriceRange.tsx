import { useState } from "react";

export function FilterPriceRange() {
  const [value, setValue] = useState("0");
  return (
    <div className="p-4">
      <p className="font-bold pb-2">Cost of living &lt; {value}$</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <input
          type="range"
          min="500"
          max="3000"
          value={value}
          className="range range-sm"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
