import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Timesheet.css";

const TimeSheetsList = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [error, setError] = useState(null);
  const [confirmationId, setConfirmationId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentTimesheet, setCurrentTimesheet] = useState({
    activity: "",
    description: "",
    start: "",
    end: "",
  });

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

  const handleDelete = async (id) => {
    const uid = localStorage.Id;
    const token = localStorage.getItem("token");

    if (confirmationId === id) {
      try {
        await axios.delete(
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
        setError("Failed to delete timesheet");
      }
    } else {
      // Show confirmation
      setConfirmationId(id);
    }
  }
  const handleCancel = () => {
    setConfirmationId(null);
  };

  useEffect(() => {
    handleTimesheet();
  }, []);

  const openModal = (timesheet) => {
    setCurrentTimesheet(timesheet);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleUpdate = async () => {
    const uid = localStorage.Id;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:8080/user/${uid}/timesheet/${currentTimesheet.id}`, currentTimesheet,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowModal(false);
      handleTimesheet();
    } catch (error) {
      //setError("Failed to update timesheet");
    }
  };


  return (
    <body>
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
                  <div className="mycard">
                    <button
                      id={timesheet.id}
                      className="btn btn-primary"
                      onClick={() => openModal(timesheet)}
                    >
                      Update
                    </button>
                    {confirmationId === timesheet.id ? (
                      <>
                        <button
                          className="btn btn-danger col"
                          onClick={() => handleDelete(timesheet.id)}
                        >
                          Confirm
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
              {showModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Update Timesheet</h5>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <label>Activity</label>
                          <input
                            type="text"
                            className="form-control"
                            value={currentTimesheet.activity}
                            onChange={(e) =>
                              setCurrentTimesheet({ ...currentTimesheet, activity: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            className="form-control"
                            value={currentTimesheet.description}
                            onChange={(e) =>
                              setCurrentTimesheet({ ...currentTimesheet, description: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Start Time</label>
                          <input
                            type="text"
                            className="form-control"
                            value={currentTimesheet.start}
                            onChange={(e) =>
                              setCurrentTimesheet({ ...currentTimesheet, start: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>End Time</label>
                          <input
                            type="text"
                            className="form-control"
                            value={currentTimesheet.end}
                            onChange={(e) =>
                              setCurrentTimesheet({ ...currentTimesheet, end: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={handleUpdate}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </body >
  );
};

export default TimeSheetsList;
