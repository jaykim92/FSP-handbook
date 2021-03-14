import React from "react";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Introduction({ data }) {
  return (
    <div>
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
