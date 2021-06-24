import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// import components from react-bootstrap
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// function passing through data that is deconstructed
function SearchResults({ title, content, category, href }) {
  return (
    <Col xs={12} className="mt-3">
      <Link to={`/handbook/${category}/#${href}`}>
        <Card style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <Card.Body>
            <Card.Text>{category} section</Card.Text>
            <Card.Text>{content.slice(0, 400)}...</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default SearchResults;
