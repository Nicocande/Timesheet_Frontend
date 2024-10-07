import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import AddTimeSheet from "../pages/AddTimeSheet";
import TimeSheet from "../pages/TimeSheet";
import { AuthContext } from "./AuthContext";
import { useEffect, useContext } from "react";
import Dashboard from "../pages/Dashboard";

const Navbar = () => {
  
  const { auth, user } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = auth; // null represents the initial loading state
  const [loggeduser, setLoggeduser] = user; // null represents the initial loading state
  
  useEffect(() => {
    console.log(loggeduser);
  }, [loggeduser]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary navbar-item a:hover">
      <div className="container-fluid">
        <div className="logo">
          <h1>TimeSheet</h1>
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
            <li className="nav-item">
              <NavLink to="/" className={Dashboard}>
                Dashboard
              </NavLink>
            </li>
          </ul>
          <span >utente: {isAuthenticated ? `${loggeduser}` : ``}</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
