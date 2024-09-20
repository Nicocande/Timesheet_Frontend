import { NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddTimeSheet from "../pages/AddTimeSheet";
import TimeSheet from "../pages/TimeSheet";

const Navbar = () => {
  return (
    <nav className=" navbar-expand-lg">
      <div className="container-fluid navbar-item a:hover">
        <ul className="navbar-nav  me-auto">
          <li className="nav-item flex gap-10">
            <NavLink to="/" className={HomePage}>
              Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/timesheet" className={TimeSheet}>
              TimeSheets
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/addtimesheet" className={AddTimeSheet}>
              Add NewTimeSheet
            </NavLink>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
