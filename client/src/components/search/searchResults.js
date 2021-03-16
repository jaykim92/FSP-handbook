import React from "react";

// import components from react-bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// function passing through data that is deconstructed
function SearchResults({ title, tag, content, category }) {
  return (
    <Col className="mt-3">
      <a href={`/handbook/${category}`}>
        <Card style={{ width: "60%", height: "100%", overflow: "hidden" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content.slice(0, 50)}...</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}

export default SearchResults;
