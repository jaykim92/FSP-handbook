import React from "react";

// import react-bootstrap components
import Col from "react-bootstrap/Col";
import { HashLink as Link } from "react-router-hash-link";

function TreatmentSideBar({ title, href }) {
  return (
    <div>
      <Col xs={12}>
            <Link
              exact
              to={`/handbook/introduction#${href}`}
              className="text-muted"
            >
              {title}
            </Link>
      </Col>
    </div>
  );
}

export default TreatmentSideBar;
