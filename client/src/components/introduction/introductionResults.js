import React from "react";

// function passing through data that is deconstructed
function SearchResults({ title, content, href }) {
  return (
    <>
      <h5 id={href}>{title}</h5>
      <p>{content}</p>
    </>
  );
}

export default SearchResults;
