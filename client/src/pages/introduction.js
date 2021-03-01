import React from "react";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Introduction({ data }) {
  return (
    <div style={{overflow: "scroll"}}>
      <Container>
        <Row>
          <h3 id={data.sectionTitle}>{data.sectionTitle}</h3>
        </Row>
        <Row>
          <p>{data.content}</p>
        </Row>
      </Container>
    </div>
  );
}

export default Introduction;
