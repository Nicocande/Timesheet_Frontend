import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginForm.css";
import Login from "./Login";

const SignUp = (async) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    pwd: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showLogin, setShowLogin] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.lastname) newErrors.lastname = "LastName is required.";
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
    const newErrors = validateForm();
    setErrors(newErrors);
    if (!Object.keys(newErrors).length > 0) {
      console.log("Submit Successful:", formData);
    }

    handleSignUp();
  };

  async function handleSignUp() {
    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        formData
      );

      console.log("Sign Up successful:", response.data.entity);
      // todo: get token from login
      setShowLogin(true);
    } catch (error) {
      setErrors("Sign Up failed");
      console.error(error);
    }
  }

  return (
    <div>
      {!showLogin ? (
        <div className="container">
          <h2>Sign Up</h2>
          <div className="underline"></div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div>
                <label className="input">
                  <i className="bi bi-person"></i>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </label>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>
              <div>
                <label className="input">
                  <i className="bi bi-person"></i>
                  <input
                    className="input"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Lastname"
                  />
                </label>
                {errors.lastname && (
                  <p style={{ color: "red" }}>{errors.lastname}</p>
                )}
              </div>
              <div>
                <label className="input">
                  <i className="bi bi-envelope"></i>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </label>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div>
                <label className="input">
                  <i className="bi bi-lock"></i>
                  <input
                    className="input"
                    type="password"
                    name="pwd"
                    value={formData.pwd}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </label>
                {errors.pwd && <p style={{ color: "red" }}>{errors.pwd}</p>}
              </div>
              <div className="submit-container">
                <button type="submit" className="text">
                  Submit
                </button>
                <button
                  type="button"
                  className="text"
                  onClick={() => navigate("/")}
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Login firstemail={formData.email} firstpwd={formData.pwd} />
      )}
    </div>
  );
};

export default SignUp;
