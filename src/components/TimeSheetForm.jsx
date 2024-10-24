import { useState } from "react";
import axios from "axios";
import "../styles/AddNew.css";

const TimesheetForm = () => {
  const [formData, setFormData] = useState({
    start: "",
    end: "",
    description: "",
    activity: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.activity) newErrors.activity = "Activity is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.start) newErrors.start = "Start date is required.";
    if (!formData.end) newErrors.end = "End date is required.";
    return newErrors;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const id = localStorage.getItem("Id");
      const token = localStorage.getItem("token");

      if (id) {
        const response = await axios.post(
          `http://localhost:8080/user/${id}/timesheet`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFormData({
          activity: "",
          description: "",
          start: "",
          end: "",
        });
        alert("Timesheet added successfully");
        setErrors({});
      }
    } catch (error) {
      setErrors("Failed to create timesheets.");
    }
  };

  return (
    <card className="card">
      <div className="container">
        <h2>Create New</h2>
        <div className="underline"></div>
        <form>
          <div className="inputs">
            <div>
              <label className="input">
                <input
                  className="input"
                  type="text"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="activity"
                />
              </label>
              {errors.activity && (
                <p style={{ color: "red" }}>{errors.activity}</p>
              )}
            </div>
            <div>
              <label className="input">
                <input
                  className="input"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="description"
                />
              </label>
              {errors.description && (
                <p style={{ color: "red" }}>{errors.description}</p>
              )}
            </div>
            <div>
              <label className="input">
                <input
                  className="input"
                  type="datetime-local"
                  name="start"
                  value={formData.start}
                  onChange={handleChange}
                  placeholder="start-dtae"
                />
              </label>
              {errors.start && <p style={{ color: "red" }}>{errors.start}</p>}
            </div>
            <div>
              <label className="input">
                <input
                  className="input"
                  type="datetime-local"
                  name="end"
                  value={formData.end}
                  onChange={handleChange}
                  placeholder="end-date"
                />
              </label>
              {errors.end && <p style={{ color: "red" }}>{errors.end}</p>}
            </div>
            <div className="submit-container">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleForm}
              >
                New
              </button>
            </div>
          </div>
        </form>
      </div>
    </card>
  );
};
export default TimesheetForm;
