import React from "react";

// function passing through data that is deconstructed
function SearchResults({ title, content, href }) {
  return (
    <>
      <h5>{title}</h5>
      <p id={href}>{content}</p>
    </>
  );
}

export default SearchResults;
