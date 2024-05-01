import { useState, useLayoutEffect, useRef } from "react";

export function AsideFilter() {
  const [isSticky, setIsSticky] = useState(false);
  const [filterHeight, setFilterHeight] = useState(0);
  const filterRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const asideFilter = filterRef.current;

      if (!hero || !asideFilter) return;

      const heroBounding = hero.getBoundingClientRect();

      if (heroBounding.bottom <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    // Obtener la altura del filtro después de que se renderice
    if (filterRef.current) {
      setFilterHeight(filterRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <div
        id="aside-filter"
        ref={filterRef}
        className={`transition-all duration-500 ${
          isSticky ? "fixed top-0 inset-x-0 z-50" : ""
        }`}
      >
        {/* Contenido del aside */}
        <div className="w-[360px] h-screen flex flex-col border-r border-gray-300">
          {/* first block */}
          <div className="p-4 pb-0 flex flex-items-center justify-between ">
            {/* close button */}
            <button className="btn btn-square border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* clear button */}
            {/* <button className="btn">Clear filters</button> */}
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Filters" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* test-clean-filters */}
          <div className="p-4 border-b border-gray-300">
            {/* clear button */}
            {/* <button className="btn btn-sm">Clear filters</button> */}
            <button className="btn btn-block btn-sm border border-gray-200">
              Clear filters
            </button>
          </div>

          {/* second block */}
          <div className="p-4">
            <p className="font-bold pb-2">Wheather</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <input
                type="checkbox"
                name="weather"
                aria-label="☀️ Warm now"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="⛅ Mild now"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="☁️ Cold now"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="❄️ Snow now"
                className="btn btn-sm border border-gray-200"
              />
            </div>
          </div>

          {/* thrid block */}
          <div className=" p-4 pt-1">
            <p className="font-bold pb-2">Where</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 pt-2">
              <input
                type="checkbox"
                name="weather"
                aria-label="☀️ North America"
                className="btn border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="⛅ Europe"
                className="btn border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="☁️ Asia"
                className="btn border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="❄️ Latin America"
                className="btn border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="⛅ Africa"
                className="btn border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="☁️ Antartida"
                className="btn border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="❄️ Oceania"
                className="btn border border-gray-200"
              />
            </div>
          </div>

          {/* Four block */}
          <div className="p-4 pt-1">
            <p className="font-bold pb-2">Price</p>
            <div className="flex gap-10 pt-2">
              <label className="">
                <select className="select border border-gray-300">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>200 €</option>
                  <option>300 €</option>
                  <option>400 €</option>
                  <option>500 €</option>
                  <option>99999 €</option>
                </select>
                <div className="label">
                  <span className="label-text-alt">min</span>
                </div>
              </label>
              <label className="">
                <select className="select border border-gray-300">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>200 €</option>
                  <option>300 €</option>
                  <option>400 €</option>
                  <option>500 €</option>
                  <option>99999 €</option>
                </select>
                <div className="label">
                  <span className="label-text-alt">max</span>
                </div>
              </label>
            </div>
          </div>

          {/* fifth block */}
          <div className="p-4 pt-0">
            <p className="font-bold pb-2">Wheather</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <input
                type="checkbox"
                name="weather"
                aria-label="☀️ Safe"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="⛅ Fast internet"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="☁️ Clean air now"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="❄️ Snow now"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="☀️ Safe"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="⛅ Fast internet"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="☁️ Clean air now"
                className="btn btn-sm border border-gray-200"
              />
              <input
                type="checkbox"
                name="weather"
                aria-label="❄️ Snow now"
                className="btn btn-sm border border-gray-200"
              />
            </div>
          </div>

          {/* Sixth block */}
          <div className="p-4 border-t border-gray-300">
            <button className="btn btn-block border border-gray-300">
              Apply filters
            </button>
          </div>
        </div>
      </div>
      {/* Agregar un espacio de relleno del mismo tamaño del filtro para evitar que otros elementos se muevan */}
      {isSticky && (
        <div
          style={{ height: `${filterHeight}px`, width: "360px" }}
          className="invisible sm:visible"
        />
      )}
    </>
  );
}
