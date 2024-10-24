import React from "react";
import Navbar from "../components/Navbar";
import Component from "../components/Footer";
import TimeSheetsList from "../components/TimeSheetsList";

const TimeSheet = () => {
  return (
    <>
      <Navbar />

      <TimeSheetsList />

      <Component />
    </>
  );
};

export default TimeSheet;
