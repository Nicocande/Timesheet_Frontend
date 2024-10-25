import React from 'react'
import SignUp from '../components/SignUp'
import TimeSheetLogo from "../images/TimesheetLogo.png";


const SignUpPage = () => {
  return (
    <>
     <header>
        <div className="logo">
          <img src={TimeSheetLogo} alt="" />
            <h3>MyTimeSheet</h3>
        </div>
      </header>
      <SignUp/>
    </>
  )
}

export default SignUpPage
