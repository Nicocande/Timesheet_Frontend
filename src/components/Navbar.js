import { NavLink } from "react-router-dom";
import AddTimeSheet from "../pages/AddTimeSheet";
import TimeSheetList from "../pages/TimeSheetList";
import Tecnologia from "../pages/Tecnologia";

const Navbar = () => {
  return (
    <nav className=" navbar-expand-lg">
      <div className="container-fluid navbar-item a:hover">
        <ul className="navbar-nav  me-auto">
          <li className="nav-item flex gap-10">
            <NavLink to="/timesheetlist" className={TimeSheetList}>
              TimeSheets
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/addtimesheet" className={AddTimeSheet}>
              AddTimeSheet
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/tecnologia" className={Tecnologia}>
              Tecnologia
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
