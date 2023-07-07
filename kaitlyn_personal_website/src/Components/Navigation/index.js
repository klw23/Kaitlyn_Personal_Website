import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Navbar, Nav } from "react-bootstrap";
import NavData from "./navData";

function Navigation() {
  const location = useLocation();
  const { data } = NavData();
  if (data === null) {
    console.log("loading page..");
  } else {
    return (
      <div
        className="navigation-container"
        style={{
          backgroundImage: `url('${data[0].pathToImage}')`,
        }}
      >
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                LANDING
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/experience"
                className={location.pathname === "/experience" ? "active" : ""}
              >
                EXPERIENCE
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className={location.pathname === "/projects" ? "active" : ""}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
