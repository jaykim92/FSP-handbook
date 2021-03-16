import React from "react";

// import components
import StickyNav from "../components/navbar";
import HandbookContent from "../components/handbookContent";
import TableOfContents from "../components/tableOfContents";

// import utils
import tableOfContents from "../utils/tableOfContents.json";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Handbook() {
  return (
    <div>
      <StickyNav />
      <Container fluid>
        <Row>
          <Col xs={2} fixed="top">
            {tableOfContents.map((item, i) => (
              <TableOfContents key={i} data={item} />
            ))}
          </Col>
          <Col
            xs={8}
            style={{height: "92vh", overflowY: "scroll" }}
          >
            <HandbookContent />
          </Col>
          <Col xs={2}>test sidebar</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Handbook;
