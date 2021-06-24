import React, { useState, useEffect } from "react";
import axios from "axios";

// import component for getting data from backend
import IntroductionResults from "./introductionResults";
import SideBar from "./sideBar";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function Introduction() {
  const [articles, setArticles] = useState([]);

  // When this component mounts, grab article with the category introduction
  useEffect(() => {
    axios
      .get("/api/article?q=introduction")
      .then(res => {
        setArticles(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container className="mt-1">
      <Row>
        <Col xs={10} style={{ overflow: "hidden" }}>
          <h2>Introduction to Program Services</h2>
          {articles.map((article, i) => {
            return (
              <IntroductionResults
                key={i}
                title={article.title}
                content={article.content}
                href={article.href}
                section={article.section}
              />
            );
          })}
        </Col>

        <Col xs={2}>
          <Nav className="sticky-top">
            {articles.map((article, i) => {
              return (
                <SideBar key={i} title={article.title} href={article.href} />
              );
            })}
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
