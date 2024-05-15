import { useState, useEffect, useRef } from "react";
import FilterApplyButton from "./filters/filterApplyButton";
import filterOptions from "./filterOptions";
import { FilterPriceRange } from "./filters/filterPriceRange/filterPriceRange";
import { FilterToolbar } from "./filters/filterToolbar";
import { FilterGroup } from "./filters/filterGroup";

export function AsideFilter() {
  const { weather, where, other } = filterOptions;
  const [isHidden, setIsHidden] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null); // Asegura que filterRef es de tipo HTMLDivElement

  const handleHideAsideFilter = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsHidden(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const filterElement = filterRef.current;
      if (!filterElement) return;

      const filterRect = filterElement.getBoundingClientRect();
      const buttonElement = filterElement.querySelector(
        ".applyButton"
      ) as HTMLElement; // Tipo HTMLElement

      if (!buttonElement) return;

      const buttonRect = buttonElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the filter is about to leave the viewport
      if (filterRect.bottom < windowHeight) {
        filterElement.classList.add("sticky");
        filterElement.style.bottom = `${windowHeight - buttonRect.bottom}px`;
      } else {
        filterElement.classList.remove("sticky");
        filterElement.style.bottom = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={filterRef}
      className={`w-full h-screen flex flex-col relative md:w-[360px] md:border md:border-r-gray transition-transform duration-500 ease-in-out ${
        isHidden ? "transform -translate-x-full" : ""
      }`}
      style={{ position: "sticky", top: 0 }}
    >
      {/* Sticky-block */}
      <FilterToolbar onHideAsideFilter={handleHideAsideFilter} />

      {/* Barra-navegación personalizada */}
      <div
        className="overflow-y-auto bg-white flex-1"
        style={{ position: "sticky", top: "50px" }}
      >
        <FilterGroup filterOptions={weather} title={"Weather"} />
        <FilterGroup filterOptions={where} title="Where" size="px-2 py-3" />
        <FilterPriceRange />
        <FilterGroup filterOptions={other} title="Other" />
      </div>

      {/* Sticky-block */}
      <div className="applyButton">
        <FilterApplyButton />
      </div>
    </div>
  );
}
