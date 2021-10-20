import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar className="mt-2 px-3" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <p
            className="mb-0"
            style={{ letterSpacing: "5px", fontSize: "20px" }}
          >
            VERONI
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="nav-title">
            <Nav.Link href="/profile/home" className="ml-2 mr-2">
              Home
            </Nav.Link>
            <Nav.Link href="/profile/about" className="ml-2 mr-2">
              About
            </Nav.Link>
            <Nav.Link href="/profile/projects" className="ml-2 mr-2">
              Projects
            </Nav.Link>
            <Nav.Link href="/profile/contact" className="ml-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
