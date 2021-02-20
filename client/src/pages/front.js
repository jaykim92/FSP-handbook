import React from "react";

// import components
import StickyNav from "../components/navbar";
import SideBar from "../components/sideBar";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Front() {
  return (
    <>
      <StickyNav />
      <Container fluid>
        <Row>
          <Col fixed="top">test table of contents</Col>
          <Col xs={8}>
            <h1>test content</h1>
          </Col>
          <Col>test sidebar</Col>
        </Row>
      </Container>
    </>
  );
}

export default Front;
