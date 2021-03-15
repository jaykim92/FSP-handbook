import React from "react";

// function passing through data that is deconstructed
function SearchResults({ title, tag, content }) {
  return (
    <>
      <a href={tag}>{title}</a>
      <p>{content}</p>
    </>
  );
}

export default SearchResults;
