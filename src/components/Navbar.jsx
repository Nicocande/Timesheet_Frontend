import { NavLink } from "react-router-dom";
import AddTimeSheet from "../pages/AddTimeSheet";
import TimeSheet from "../pages/TimeSheet";
import Logout from "./Logout";
import Tecnologia from "../pages/Tecnologia";
import "../styles/Navbar.css";
import TimeSheetLogo from "../images/TimesheetLogo.png";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary navbar-item a:hover">
        <div className="logo">
          <h3>MyTimeSheet</h3> <img src= {TimeSheetLogo} alt=""/>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink to="/timesheet" className={TimeSheet}>
                TimeSheets
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/addtimesheet" className={AddTimeSheet}>
                Add New
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tecnologia" className={Tecnologia}>
                Tecnology
              </NavLink>
            </li>
          </ul>
          <Logout />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
