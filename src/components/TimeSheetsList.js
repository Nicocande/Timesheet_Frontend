import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Timesheet.css";

const TimeSheetsList = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [error, setError] = useState(null);

  async function handleTimesheet() {
    try {
      const id = localStorage.getItem("Id");
      const token = localStorage.getItem("token");

      if (id) {
        const response = await axios.get(
          `http://localhost:8080/user/${id}/timesheet`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setTimesheets(response.data);
      }
    } catch (error) {
      console.error("Fetch error", error);
      setError("Failed to fetch timesheets.");
    }
  }

  async function handleDelete(id) {
    const uid = localStorage.Id;
    const token = localStorage.getItem("token");

    if (window.confirm("Are you sure you want to delete this timesheet?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8080/user/${uid}/timesheet/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTimesheets((prevTimesheets) =>
          prevTimesheets.filter((ts) => ts.id !== id)
        );
        alert("Timesheet deleted successfully");
        handleTimesheet();
      } catch (error) {
        setError("Failed to delete the timesheet");
      }
    }
  }

  useEffect(() => {
    handleTimesheet();
  }, []);

  return (
    <div className="scrollable-container-fluid mt-5">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!error && timesheets.length === 0 && <p>No timesheets found.</p>}
      <div className="row">
        {timesheets.map((timesheet) => (
          <div className="col-md-4 mb-4" key={timesheet.id}>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">{timesheet.activity}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{timesheet.description}</p>
                <p>Start: {timesheet.start}</p>
                <p>End: {timesheet.end}</p>
                <button
                  id={timesheet.id}
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(e.target.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSheetsList;
