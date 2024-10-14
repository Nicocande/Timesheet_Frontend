import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

function Logout() {
  const navigate = useNavigate();

  const quit = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Do you want to Log out?")) {
      return;
    }
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <button className="btn btn-danger rounded-5" onClick={quit}>
      Logout
    </button>
  );
}

export default Logout;
