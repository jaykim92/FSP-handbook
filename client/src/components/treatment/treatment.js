import React, { useState, useEffect } from "react";
import axios from "axios";

// import components for getting data from backend
import TreatmentResults from "./treatmentResults";
import TreatmentSideBar from "./sideBar";

// import react-bootstrap comoponenets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function Treatment() {
  const [articles, setArticles] = useState([]);

  // when this component mounts, grab article with category/q = treatment
  useEffect(() => {
    axios
      .get("/api/article?q=treatment")
      .then(res => {
        setArticles(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Phases of Treatment</h2>
          {articles.map((article, i) => {
            return (
              <TreatmentResults
                key={i}
                title={article.title}
                content={article.content}
                href={article.href}
              />
            );
          })}
        </Col>

        <Col xs={2}>
          <Nav className="sticky-top">
            {articles.map((article, i) => {
              return (
                <TreatmentSideBar
                  key={i}
                  title={article.title}
                  href={article.href}
                />
              );
            })}
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Treatment;
