import FilterApplyButton from "./filterApplyButton";
import { FilterGroup } from "./filterGroup";
import filterOptions from "./filterOptions";
import { FilterPriceRange } from "./filterPriceRange";
import { FilterToolbar } from "./filterToolbar";

export function AsideFilter() {
  const { weather, where, other } = filterOptions;
  return (
    <div className="w-full h-screen flex flex-col relative">
      {/* Sticky-block */}
      <FilterToolbar />

      {/*  Barra-navegación personalizada*/}
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
