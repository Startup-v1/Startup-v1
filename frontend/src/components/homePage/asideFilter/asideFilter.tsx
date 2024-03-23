import "./asideFilter.scss";

export function AsideFilter() {
  return (
    <div className="artboard phone-4 artboard-me">
      <div className="filter-begin">
        <div className="filters-begin-end-divider">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <label className="input input-bordered flex items-center gap-2 h-8">
            <input type="text" className="grow text-xs" placeholder="Search" />
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
      </div>
      <div className="all-filters">
        <div className="filter filter-item filter-item-1">
          <div className="filter-name">Weather</div>
          <div className="container-filter-items">
            <input
              type="checkbox"
              aria-label="☀️ Warm now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="⛅ Mild now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="☁️ Cold now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="❄️ Snow now"
              className="btn btn-sm custom-checkbox"
            />
          </div>
        </div>
        <hr className="divider-filter-groups" />
        <div className="filter filter-item filter-item-2">
          <div className="filter-name filter-name-where">Where</div>
          <div className="container-filter-items">
            <div className="join continent-item">
              <input
                className="btn continent-btn"
                type="radio"
                name="options"
                aria-label="⛅ North America"
              />
              <input
                className="btn continent-btn"
                type="radio"
                name="options"
                aria-label="⛅Europe"
              />
              <input
                className="btn continent-btn"
                type="radio"
                name="options"
                aria-label="⛅ Asia"
              />
              <input
                className="btn continent-btn"
                type="radio"
                name="options"
                aria-label="⛅ Latin America"
              />

              <input
                className="btn continent-btn"
                type="radio"
                name="options"
                aria-label="⛅ Africa"
              />

              <input
                className="btn continent-btn"
                type="radio"
                name="options"
                aria-label="⛅ Antartida"
              />
              <input
                className="btn continent-btn"
                type="radio"
                name="options"
                aria-label="⛅ Oceania"
              />
            </div>
          </div>
        </div>
        <hr className="divider-filter-groups" />
        <div className="filter filter-item filter-item-3">
          <div className="filter-name filter-name-price">Price</div>
          <div className="container-filter-items">
            <div className="container-price-items">
              <label className=" w-full max-w-xs centered-label">
                <select className="select w-full max-w-xs select-bordered custom-select">
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
              <label className=" w-full max-w-xs centered-label">
                <select className="select w-full max-w-xs select-bordered custom-select">
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
        </div>
        <hr className="divider-filter-groups" />
        <div className="filter filter-item filter-item-5">
          <div className="filter-name filter-name-popular">Popular</div>
          <div className="container-filter-items">
            <input
              type="checkbox"
              aria-label="☀️ Safe"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="⛅ Fast internet"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="☁️ Clean air now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="❄️ Snow now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="❄️ Snow now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="❄️ Snow now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="❄️ Snow now"
              className="btn btn-sm custom-checkbox"
            />
            <input
              type="checkbox"
              aria-label="❄️ Top tinder"
              className="btn btn-sm custom-checkbox"
            />
          </div>
        </div>
      </div>
      <div className="filter-end">
        <button className="btn btn-active btn-ghost btn-sm">Clear all</button>
      </div>
    </div>
  );
}
