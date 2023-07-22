import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div>
      <Navbar fluid className="bg-black">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Machine test
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <Link to={"/"}>Home</Link>
          </Navbar.Link>
          <Navbar.Link active href="#">
            <Link to={"/form"}>Form</Link>
          </Navbar.Link>
          <Navbar.Link active href="#">
            <Link to={"/university"}>University</Link>
          </Navbar.Link>
          <Navbar.Link active href="#">
            <Link to={"/notification"}>Chat</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topbar;
