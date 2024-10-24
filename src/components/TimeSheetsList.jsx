import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Timesheet.css";

const TimeSheetsList = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [error, setError] = useState(null);
  const [confirmationId, setConfirmationId] = useState(null);

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

    if (confirmationId === id) {
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
        setConfirmationId(null);
        handleTimesheet();
      } catch (error) {
        setError("Failed to delete the timesheet");
      }
    } else {
      // Show confirmation
      setConfirmationId(id);
    }
  }
  const handleCancel = () => {
    setConfirmationId(null); // Reset confirmation state
  };

  useEffect(() => {
    handleTimesheet();
  }, []);

  return (
    <div className="container-fluid mt-5 d-block">
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
                {confirmationId === timesheet.id ? (
                  <>
                    <button
                      className="btn btn-danger col"
                      onClick={() => handleDelete(timesheet.id)}
                    >
                      Confirm Delete
                    </button>
                    <button
                      className="btn btn-secondary col" 
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    id={timesheet.id}
                    className="btn btn-danger"
                    onClick={() => handleDelete(timesheet.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSheetsList;
