import { Footer } from "flowbite-react";
import TimeSheetLogo from "../images/TimesheetLogo.png";

export function Component() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-between align-items-center fixed-bottom">
        <div className="logo">
         <img src= {TimeSheetLogo} alt=""/>
        </div>
        <div>
          <Footer.LinkGroup col>
            <Footer.Link href="#">Github</Footer.Link>
            <Footer.Link href="#">Discord</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.LinkGroup col>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
  );
}
export default Component;
