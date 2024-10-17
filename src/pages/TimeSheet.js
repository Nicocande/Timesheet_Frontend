import React from "react";
import Navbar from "../components/Navbar";
import Component from "../components/Footer";
import TimeSheetsList from "../components/TimeSheetsList";

const TimeSheet = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <TimeSheetsList />
      </body>
      <footer>
        <Component />
      </footer>
    </>
  );
};

export default TimeSheet;
