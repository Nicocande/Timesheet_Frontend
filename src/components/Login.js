import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

function Login() {
  const [action, setAction] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const resetTextFields = () => {
    setEmail("");
    setPwd("");
    setName("");
    setLastname("");
  };

  const handleSubmit = async (e) => {
    if (action === "Sign up") {
      await handleSignUp();
    }
    if (action === "Log in") {
      await handleLogIn();
    }
  };

  const handleLogIn = async () => {
    const dati = { email, pwd };
    const datiLogin = JSON.stringify(dati);

    try {
      const response = await fetch("http://localhost:8080/auths", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: datiLogin,
      });

      if (!response.ok) {
        throw new Error(`Log In error!  status: ${response.status}`);
      }

      const resp = await response.json();
      console.log("Success:", resp);
      setSuccess(true);
      setError(null);
      navigate("/timesheet");
    } catch (error) {
      console.error("Log In Error:", error);
      setError(error.message);
      setSuccess(false);
    }
  };

  const handleSignUp = async () => {
    const dati = { name, lastname, email, pwd };
    const datiRegistration = JSON.stringify(dati);
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: datiRegistration,
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Sign Up error! status: ${response.status} ${errorText}`
        );
      }

      const resp = await response.json();
      console.log("Success:", resp);
      setSuccess(true);
      setError(null);
      navigate("/timesheet");
    } catch (error) {
      console.error("Sign Up Error:", error);
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>

        <div className="inputs">
          {action === "Log in" ? (
            <div></div>
          ) : (
            <div className="input">
              <i className="bi bi-person"></i>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
          )}
          {action === "Log in" ? (
            <div></div>
          ) : (
            <div className="input">
              <i className="bi bi-person"></i>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Lastname"
                required
              />
            </div>
          )}
          <div className="input">
            <i className="bi bi-envelope"></i>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input">
            <i className="bi bi-lock"></i>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
        </div>

        {action === "Sign up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Inputs */}
          <div className="submit-container">
            <button
              type="button"
              onClick={() => {
                setAction("Sign up");
                resetTextFields();
              }}
            >
              Sign up
            </button>
            <button
              type="button"
              onClick={() => {
                setAction("Log in");
                resetTextFields();
              }}
            >
              Log in
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>Sign up successful!</div>}
    </div>
  );
}
export default Login;
