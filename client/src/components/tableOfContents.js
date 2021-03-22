import React from "react";

// import react-bootstrap components
import Nav from "react-bootstrap/Nav";

function TableOfContents({ data }) {
  return (
    <>
        <Nav.Link href={`/handbook${data.path}`} className="text-muted">{data.sectionTitle}</Nav.Link>
    </>
  );
}

export default TableOfContents;
