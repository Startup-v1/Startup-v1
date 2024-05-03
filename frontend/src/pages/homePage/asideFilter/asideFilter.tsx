export function AsideFilter() {
  return (
    <div className="w-full h-screen flex flex-col relative">
      {/* Sticky-block */}
      <div className="p-4 flex flex-items-center justify-between border-b border-gray-200 sticky top-0 bg-white">
        {/* close button */}
        <button className="btn btn-square btn-sm border border-gray-200">
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
        <button className="btn btn-sm border border-gray-200 md:btn-md lg:btn-lg">
          Clean filters
        </button>
      </div>

      {/*  Barra-navegación personalizada*/}
      <div className="overflow-y-auto">
        {/* First block */}
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
        <div className=" p-4">
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
        <div className="p-4">
          <p className="font-bold pb-2">Price</p>
          <div className="flex pt-2 justify-between">
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
        <div className="p-4">
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
          </div>
        </div>
        {/* fifth block */}
        <div className="p-4">
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
          </div>
        </div>
      </div>

      {/* Sticky-block */}
      <div className="p-4 border-t border-gray-300 sticky bottom-0 bg-white ">
        <button className="btn btn-block btn-sm border border-gray-300">
          Apply filters
        </button>
      </div>
    </div>
  );
}
