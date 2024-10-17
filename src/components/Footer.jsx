import { Footer } from "flowbite-react";

export function Component() {
  return (
    <div className="container-fluid">
      <div className="bg-info d-flex flex-wrap justify-content-between align-items-center fixed-bottom">
        <div>
          <Footer.LinkGroup col>MyTimeSheet</Footer.LinkGroup>
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
