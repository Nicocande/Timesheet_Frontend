import React from "react";
import axios from "axios";
import { useState } from "react";

const TimeSheetsList = () => {


  async function handleTimesheet() {
    try {
      const uid = localStorage.getItem("Id");
      const token = localStorage.getItem("token");

       if (uid) {
        const response = await axios.get(
          `http://localhost:8080/users/${uid}/sheets`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
       }
    } catch (error) {
      console.error("Fetch error", error);
    }
  }

  return (
    <>
      <div className="list">
        <button className="btn btn-primary" type="button" onClick={(e) => handleTimesheet()}>
          Click Me!!
        </button>
      </div>
    </>
  );
};

export default TimeSheetsList;
