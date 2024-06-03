import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/routePaths";
import { UserTemperature } from "./userTemperature";
import { UserCurrency } from "./userCurrency";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const currentRoute = location.pathname;

  const getBgClass = (url: RoutePaths) => {
    return (currentRoute === url && "bg-light-gray") || "";
  };

  const handleClick = () => {
    const event = new Event("showAsideFilterEvent");
    window.dispatchEvent(event);
  };

  return (
    <div className="navbar bg-base-100 absolute z-10 p-0">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl ml-4" to={RoutePaths.home}>
          Name+Logo
        </Link>
        <ul className="menu menu-horizontal px-1">
          <li className="ml-3 text-base">
            <Link className={getBgClass(RoutePaths.home)} to={RoutePaths.home}>
              Cities
            </Link>
          </li>
          <li className="ml-3 text-base">
            <Link
              className={getBgClass(RoutePaths.trips)}
              to={RoutePaths.trips}
            >
              Trips
            </Link>
          </li>
          <li className="ml-3 text-base">
            <Link
              className={getBgClass(RoutePaths.meetups)}
              to={RoutePaths.meetups}
            >
              Meetups
            </Link>
          </li>

          {/* boton para activar el AsideFilter */}
          <li className="ml-3 text-base">
            <button className="xl:hidden" onClick={handleClick}>
              Filtros
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4">
        <UserTemperature />
        <UserCurrency />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://adriandanlos.es/images/me.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={RoutePaths.trips}>Profile</Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
