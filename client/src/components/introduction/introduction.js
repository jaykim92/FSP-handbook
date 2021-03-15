import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import axios call from utils folder
import API from "../../utils/API";

// import component for search results
import IntroductionResults from "./introductionResults";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";

// function Introduction({data}) {

//   return (
//     <div>
//       <Container>
//         <Row>
//           <h3 id={data.sectionTitle}>{data.sectionTitle}</h3>
//         </Row>
//         <Row>
//           <p>{data.content}</p>
//         </Row>
//       </Container>
//     </div>
//   );
// }

function Introduction() {
  const [articles, setArticles] = useState([]);

  // When this component mounts, grab article with title introduction
  useEffect(() => {
    axios
      .get("/api/article?q=introduction")
      .then((res) => {
        setArticles(res.data)})
      .catch(err => console.log(err));
  }, []);

  console.log(articles)
  return (
    <Container>
      <h2>Introduction to Program Services</h2>
      <Row>
        <p>hello</p>
        {articles.map(article => {
          return (
            <IntroductionResults
              key={article.title}
              title={article.title}
              tag={article.tag}
              content={article.content}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default Introduction;
