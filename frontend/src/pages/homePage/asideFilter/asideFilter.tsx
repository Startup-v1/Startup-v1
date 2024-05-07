import FilterApplyButton from "./filterApplyButton";
import { FilterGroup } from "./filterGroup";
import filterOptions from "./filterOptions";
// import FilterSlider from "./filterSlider";
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
        {/* Four block */}
        <div className="p-4 bg-red-200">
          <p className="font-bold pb-2">Price</p>
          {/* <FilterSlider /> */}
        </div>
        {/* 1-other block */}
        <FilterGroup filterOptions={other} title="Other" size="btn-sm" />
      </div>

      {/* Sticky-block */}
      <FilterApplyButton />
    </div>
  );
}
