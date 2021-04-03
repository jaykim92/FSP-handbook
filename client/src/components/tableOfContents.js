import React from "react";

// import react-bootstrap components
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router } from "react-router-dom";


function TableOfContents({ data }) {
  return (
    <Col xs={12}>
        <NavLink exact to={`/handbook${data.path}/`}>
          {data.sectionTitle}
        </NavLink>
    </Col>
  );
}

export default TableOfContents;
