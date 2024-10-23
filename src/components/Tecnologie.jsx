import React from "react";
import QuarkusLogo from "../images/Quarkus.png";
import ReactLogo from "../images/React.png";
import JsLogo from "../images/Js.png";
import JavaLogo from "../images/Java.png";
import SqlLogo from "../images/SqlLogo.png";

const Tecnologie = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col">
        <img src={QuarkusLogo} alt=""/>
        </div>
        
        <div className="col">
        <img src={ReactLogo} alt="" />
        </div>
       
        <div className="col">
        <img src={JsLogo} alt="" />
        </div>
       
        <div className="col">
        <img src={JavaLogo} alt="" />
        </div>
        
        <div className="col">
        <img src={SqlLogo} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Tecnologie;
