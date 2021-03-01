import React from "react";

// import react-bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button'

// import reactbootstrap

function StickyNav({keyword, setKeyword}) {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Project FOCUS</Navbar.Brand>
      <Navbar.Toggle aria-controls="searchbar" />
      <Navbar.Collapse id="searchbar">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/handbook/introduction">Handbook</Nav.Link>
          <Nav.Link href="/links">Links</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search a topic" className="mr-sm-2" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </Form>
        <Button variant="outline-success"><a href="/search" style={{color: "green"}}>Search</a></Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default StickyNav;
