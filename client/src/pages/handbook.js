import React from "react";

// import components
import StickyNav from "../components/navbar";
import HandbookContent from "../components/handbookContent";
import TableOfContents from "../components/tableOfContents";

// import utils
import handbook from "../utils/handbook.json";
import tableOfContents from "../utils/tableOfContents.json";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Handbook() {
  return (
    <>
      <StickyNav />
      <Container fluid>
        <Row>
          <Col fixed="top">
              {tableOfContents.map((item, i) => (
                  <TableOfContents key={i} data={item}/>
              ))}   
          </Col>
          <Col xs={8} style={{ marginTop: "2rem" }}>
                <HandbookContent />
          </Col>
          <Col>test sidebar</Col>
        </Row>
      </Container>
    </>
  );
}

export default Handbook;
