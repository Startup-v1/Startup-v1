import { useState, useEffect, useRef } from "react";
import FilterApplyButton from "./filters/filterApplyButton";
import filterOptions from "./filterOptions";
import { FilterPriceRange } from "./filters/filterPriceRange";
import { FilterToolbar } from "./filters/filterToolbar";
import { FilterGroup } from "./filters/filterGroup";

export function AsideFilter() {
  const { weather, where, other } = filterOptions;
  const [isHidden, setIsHidden] = useState(true); // Comienza oculto por defecto
  const filterRef = useRef<HTMLDivElement>(null);

  const handleHideAsideFilter = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsHidden(window.innerWidth < 1280); // Ocultar cuando el ancho de la ventana sea menor que 1280px
    };

    handleResize(); // Verificar el ancho inicial en el montaje del componente
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const showAsideFilterHandler = () => {
      setIsHidden(false);
    };

    window.addEventListener("showAsideFilterEvent", showAsideFilterHandler);

    return () => {
      window.removeEventListener(
        "showAsideFilterEvent",
        showAsideFilterHandler
      );
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const filterElement = filterRef.current;
      if (!filterElement) return;

      const filterRect = filterElement.getBoundingClientRect();
      const buttonElement = filterElement.querySelector(
        ".applyButton"
      ) as HTMLElement;

      if (!buttonElement) return;

      const buttonRect = buttonElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

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
        className={`overflow-y-auto bg-white flex-1 ${
          isHidden ? "hidden md:block" : "" // Ocultar en tamaños de pantalla pequeños, mostrar solo en md (o el breakpoint deseado)
        }`}
        style={{ position: "sticky", top: "50px" }}
      >
        <FilterGroup filterOptions={weather} title={"Weather"} />
        <FilterGroup filterOptions={where} title="Where" size="px-2 py-3" />
        <FilterPriceRange />
        <FilterGroup filterOptions={other} title="Other" />
      </div>

      {/* Sticky-block */}
      <div className={`applyButton ${isHidden ? "hidden md:block" : ""}`}>
        <FilterApplyButton />
      </div>
    </div>
  );
}
