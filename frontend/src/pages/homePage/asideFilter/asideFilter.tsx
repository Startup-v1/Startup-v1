import { useState } from "react";
import FilterApplyButton from "./filterApplyButton";
import { FilterGroup } from "./filterGroup";
import filterOptions from "./filterOptions";
import { FilterPriceRange } from "./filterPriceRange";
import { FilterToolbar } from "./filterToolbar";

export function AsideFilter() {
  const { weather, where, other } = filterOptions;
  const [isHidden, setIsHidden] = useState(false);

  const handleHideAsideFilter = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null;
  }

  return (
    <div className="w-full h-screen flex flex-col relative md:w-[360px] md:border md:border-r-gray md:fixed md:top-0 md:right-0 xl:left-0">
      {/* Sticky-block */}
      <FilterToolbar onHideAsideFilter={handleHideAsideFilter} />

      {/* Barra-navegación personalizada */}
      <div className="overflow-y-auto bg-white flex-1">
        <FilterGroup filterOptions={weather} title={"Weather"} size="btn-sm" />
        <FilterGroup filterOptions={where} title="Where" />
        <FilterPriceRange />
        <FilterGroup filterOptions={other} title="Other" size="btn-sm" />
      </div>

      {/* Sticky-block */}
      <FilterApplyButton />
    </div>
  );
}
