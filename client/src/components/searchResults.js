import React from "react";

// function passing through data that is deconstructed
function SearchResults({ title, tags, content }) {
  return (
    <>
      <a href={tags}>{title}</a>
      <p>{content}</p>
    </>
  );
}

export default SearchResults;
