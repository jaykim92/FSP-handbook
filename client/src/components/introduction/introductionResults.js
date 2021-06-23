import React from "react";

// function passing through data that is deconstructed
function SearchResults({ title, content, href }) {
  const elementRef = React.useRef();

  return (
    <>
      <h5 id={href}>{title}</h5>
      <p ref={elementRef}>{content}</p>
    </>
  );
}

export default SearchResults;
