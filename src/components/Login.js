import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "../styles/LoginForm.css";

const Login = (async) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    pwd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.pwd) newErrors.pwd = "Password is required.";
    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({});
      console.log("Login Successful:", formData);
     
    }
     await handleLogIn();
  };

  async function handleLogIn() {
    try {
      
      const response = await axios.post(
        "http://localhost:8080/auths", 
        formData
      );
      const tk = response.data.token.string;
      const jwtdecoded = jwtDecode(tk);
      const id = jwtdecoded.sub;
      console.log("Success", response.data);

      localStorage.setItem("token", tk);
      localStorage.setItem("Id", id);
      console.log("Login Successful:", formData);
      navigate("home");
    } catch (error) {
     console.error("Log In Error:", error);
      setError({ api: error.message || "Login failed." });
      setSuccess(false);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Log In</h2>
        <div className="underline"></div>
        <form>
          <div className="inputs">
            <div className="input">
              <i className="bi bi-envelope"></i>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="input">
              <i className="bi bi-lock"></i>
              <input
                type="password"
                name="pwd"
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="submit-container">
              <button type="button" className="text" onClick={handleSubmit}>
                Login
              </button>
              <button
                type="button"
                className="text"
                onClick={() => navigate("/signuppage")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>Log In successful!</div>}
    </div>
  );
};
export default Login;
