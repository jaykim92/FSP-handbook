import React from "react";

// import components
import StickyNav from "../components/navbar";
import SideBar from "../components/sideBar";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Front() {
  return (
    <div>
      <StickyNav />
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row>
          <Col xs={12} md={8}>
            <h1 style={{ fontSize: "6rem", marginLeft: "1rem" }}>
              Project FOCUS
            </h1>
            <Row style={{ paddingLeft: "2rem" }}>
              <p style={{ fontSize: "1.5rem" }}>
                For Our Children's Ultimate Success
              </p>
            </Row>
            <Row style={{ paddingLeft: "2rem" }}>
              <p style={{ fontSize: "1.5rem" }}>Employee Handbook</p>
            </Row>
            <Row style={{ paddingLeft: "2rem" }}>
              <Button href="#" className="mx-1">
                Get Started
              </Button>
              <Button href="#" className="mx-1">
                Other Resources
              </Button>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="https://picsum.photos/id/400/400/400"
              alt=""
              style={{ maxWidth: "100%" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Front;
