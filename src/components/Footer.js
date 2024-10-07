import Dashboard from "../pages/Dashboard";
import Tecnologia from "../pages/Tecnologia";

import { Footer } from "flowbite-react";


export function Component() {
  return (
    <Footer className="navbar navbar-expand-lg navbar-light bg-body-tertiary navbar-item a:hove text-center fixed-bottom">
      <div className="container-fluid  ">
        <div>
          <Footer.LinkGroup col>
            <Footer.Link to="/tecnologia" className={Tecnologia}>
              Tecnologia
            </Footer.Link>
            <Footer.Link to="/contatti" className={Dashboard}>
              Contatti
            </Footer.Link>
          </Footer.LinkGroup>
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
    </Footer>
  );
}
export default Component;
