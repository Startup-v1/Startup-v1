import "./sorting.scss";

export const Sorting = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end sortingContainer mt-12 absolute top-0 right-0 w-[120px] ">
      <div tabIndex={0} role="button" className="btn w-full p-0 btn-accent text-white">
        Sort By
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Hot Weather</a>
        </li>
        <li>
          <a>Cold Weather</a>
        </li>
        <li>
          <a>Humid Conditions</a>
        </li>
        <li>
          <a>Rainy Weather</a>
        </li>
        <li>
          <a>Snowy Weather</a>
        </li>
        <li>
          <a>Population</a>
        </li>
        <li>
          <a>Safety Index</a>
        </li>
      </ul>
    </div>
  );
};
