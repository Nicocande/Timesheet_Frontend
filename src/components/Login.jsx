import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "../styles/LoginForm.css";
import TimeSheetLogo from "../images/TimesheetLogo.png";

const Login = ({ firstemail, firstpwd }) => {
  const navigate = useNavigate();
  // const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: firstemail || "",
    pwd: firstpwd || "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (firstemail) {
      setFormData.email = firstemail;
    }
    if (firstpwd) {
      setFormData.pwd = firstpwd;
    }
  }, [firstemail, firstpwd]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateForm();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      console.log("Submit Successful:", formData);
      handleLogIn();
    } else {
      console.warn("Form contains errors", err);
    }
  };

  async function handleLogIn() {
    try {
      const response = await axios.post(
        "http://localhost:8080/auths",
        formData
      );
      if (response.status === 200) {
        const tk = response.data.entity.token.string;
        const jwtdecoded = jwtDecode(tk);
        const id = jwtdecoded.id;

        localStorage.setItem("token", tk);
        localStorage.setItem("Id", id);
        console.log("Login Successful:", formData);
        alert("Login Successful:");
        navigate("/timesheet");
      }
    } catch (error) {
      console.error("Log In Error:", error);
      setFormData({ email: "", pwd: "" });
      alert("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="container">
      <div className="row">
      </div>
      <div className="header">
        <h2>Log In</h2>
        <form>
          <div className="inputs">
            <div className="input">
              <i className="bi bi-envelope"></i>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <div className="input">
              <i className="bi bi-lock"></i>
              <input
                type="password"
                name="pwd"
                value={formData.pwd}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            {errors.pwd && <p style={{ color: "red" }}>{errors.pwd}</p>}
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
    </div>
  );
};
export default Login;
