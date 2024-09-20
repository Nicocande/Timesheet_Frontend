import Navbar from "../components/Navbar";
import Component from "../components/Footer";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Home = () => {
  "use client";
  return (
    <>
      <Navbar />
      <div className="div-expand-lg me-auto navbar-nav">
        <form className="form">
          <div>
            <div className="mb-2 block ">
              <Label htmlFor="Email2" value="Email" />
            </div>
            <TextInput
              id="Email2"
              type="Email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Password2" value="Password" />
            </div>
            <TextInput id="Password2" type="Password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-Password" value="Repeat password" />
            </div>
            <TextInput id="repeat-Password" type="Password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </div>
      <Component />
    </>
  );
};

export default Home;
