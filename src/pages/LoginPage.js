import React from "react";
import Login from "../components/Login";
import TimeSheetLogo from "../images/TimesheetLogo.png";
const LoginPage = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={TimeSheetLogo} alt="" />
            <h3>MyTimeSheet</h3>
        </div>
      </header>
      <Login />
    </>
  );
};

export default LoginPage;
