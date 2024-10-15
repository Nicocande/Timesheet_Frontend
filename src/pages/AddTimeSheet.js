import React from "react";
import Navbar from "../components/Navbar";
import Component from "../components/Footer";
import TimesheetForm from "../components/TimeSheetForm";


const AddTimeSheet = () => {
  return (
    <>
      <Navbar />
      <TimesheetForm/>
      <Component/>
    </>
  );
};

export default AddTimeSheet;
