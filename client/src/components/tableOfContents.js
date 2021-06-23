import React from "react";

// import react-bootstrap components
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";

function TableOfContents({ data }) {
  return (
    <Col xs={12}>
      <NavLink
        exact
        to={`/handbook${data.path}/`}
        className="text-muted"
        activeClassName="active"
      >
        {data.sectionTitle}
      </NavLink>
    </Col>
  );
}

export default TableOfContents;
