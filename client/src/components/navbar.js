import React from "react";

// import react-bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'

function StickyNav() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Project FOCUS</Navbar.Brand>
      <Navbar.Toggle aria-controls="searchbar" />
      <Navbar.Collapse id="searchbar">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/handbook">Handbook</Nav.Link>
          <Nav.Link href="/links">Links</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default StickyNav;
