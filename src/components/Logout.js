import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";


function Logout() {
  const navigate = useNavigate();
  const { auth, user } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = auth; // null represents the initial loading state
  const [loggeduser, setLoggeduser] = user; // null represents the initial loading state

  const quit = () => {
    alert("Logged OUT!!");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    setLoggeduser("---");
    setIsAuthenticated(false);
    navigate("/");
  }

  return (
    <button onClick={quit}>Logout</button>
  );


}

export default Logout