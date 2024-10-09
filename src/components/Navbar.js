import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import AddTimeSheet from "../pages/AddTimeSheet";
import TimeSheet from "../pages/TimeSheet";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary navbar-item a:hover">
      <div className="container-fluid">
        <div className="logo">
          <h3>TimeSheet</h3>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={Home}>
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
          <Logout/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
