import React, { useState, useEffect } from "react";

// import axios call from utils folder
import API from "../utils/API";

function SearchResults() {
  // setting blank initial state
  const [articles, setArticles] = useState([]);

  // load all articles using setArticles
  useEffect(() => {
    loadArticles();
  }, []);

  // define loadArticles function
  function loadArticles() {
    API.getArticle()
      .then(res => setArticles(res.data))
      .catch(err => console.log(err));
  }

  return (
    <div>{articles.length ? <p>{articles}</p> : <p>nothing to display</p>}</div>
  );
}

export default SearchResults;
