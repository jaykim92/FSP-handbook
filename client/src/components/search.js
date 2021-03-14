import React, { useState } from "react";

// import axios call from utils folder
import API from "../utils/API";

// import component for search results
import SearchResults from "./searchResults";

// import components from react-bootstrap
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function Search() {
  // set up hooks
  const [articles, setArticles] = useState([]);
  const [articleSearch, setArticleSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setArticleSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getArticles(articleSearch)
      .then(res => setArticles(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Row>
        <Form inline>
          <FormControl
            placeholder="Search a topic"
            className="mr-sm-2"
            value={articleSearch}
            onChange={handleInputChange}
            name="ArticleSearch"
          />
          <Button
            variant="outline-success"
            onClick={handleFormSubmit}
            type="success"
          >
            Search
          </Button>
        </Form>
      </Row>

      <Row>
        {articles.map(article => {
          return (
            <SearchResults
              key={article.title}
              title={article.title}
              tags={article.tags}
              content={article.content}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default Search;
