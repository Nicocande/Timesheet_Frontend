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
    if (window.confirm("Are you sure you want to delete this timesheet?")) {
      try {
        const response = await axios.delete(`http://localhost:8080/user/${id}`);

        setTimesheets((prevTimesheets) =>
          prevTimesheets.filter((ts) => ts.id !== id)
        );
        alert("Timesheet deleted successfully");

      } catch (error) {
        setError("Failed to delete the timesheet");
      }
    }
  }

  useEffect(() => {
    handleTimesheet();
    setInterval(handleTimesheet, 10000);
  }, []);

  return (
    <div className="container container-fluid">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!error && timesheets.length === 0 && <p>No timesheets found.</p>}
      <div className="row">
        {timesheets.map((timesheet) => (
          <div className="col-md-4 mb-4" key={timesheet.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{timesheet.activity}</h5>
                <p className="card-text">{timesheet.description}</p>
                <p>Start: {timesheet.start}</p>
                <p>End: {timesheet.end}</p>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSheetsList;
