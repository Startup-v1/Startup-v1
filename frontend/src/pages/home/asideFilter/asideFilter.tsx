import { useState, useRef } from "react";
import FilterApplyButton from "./filters/filterApplyButton";
import { FilterPriceRange } from "./filters/filterPriceRange";
import { FilterToolbar } from "./filters/filterToolbar";
import { FilterGroup } from "./filters/filterGroup";
import filterValues from "./utils/filterValues";
import { useResizeEffect } from "./hooks/useResizeEffect";
import { useScrollEffect } from "./hooks/useScrollEffect";

export function AsideFilter() {
  const {
    temperature,
    precipitations,
    environment,
    travel,
    size,
    safety,
    continent,
    language,
  } = filterValues;

  const [isHidden, setIsHidden] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useResizeEffect(setIsHidden);
  useScrollEffect(filterRef);

  const handleHideAsideFilter = () => {
    setIsHidden(true);
  };

  return (
    <div
      ref={filterRef}
      className={`w-full h-screen flex flex-col relative md:w-[360px] md:border md:border-r-gray transition-transform duration-500 ease-in-out ${
        isHidden ? "transform -translate-x-full" : ""
      }`}
      style={{ position: "sticky", top: 0 }}
    >
      <FilterToolbar onHideAsideFilter={handleHideAsideFilter} />
      <div
        className="overflow-y-auto bg-white flex-1"
        style={{ position: "sticky", top: "50px" }}
      >
        <FilterPriceRange />
        <FilterGroup filterValues={temperature} title="Temperature" />
        <FilterGroup filterValues={precipitations} title="Precipitations" />
        <FilterGroup filterValues={environment} title="Environment" />
        <FilterGroup filterValues={travel} title="Travel" />
        <FilterGroup filterValues={size} title="Size" />
        <FilterGroup filterValues={safety} title="Safety" />
        <FilterGroup filterValues={continent} title="Continent" />
        <FilterGroup filterValues={language} title="Language spoken" />
      </div>
      <div className="applyButton">
        <FilterApplyButton />
      </div>
    </div>
  );
}
