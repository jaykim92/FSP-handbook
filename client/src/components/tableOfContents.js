import React from "react";

// import react-bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'

function TableOfContents ({data}) {
    return(
        <Navbar className="flex-column">
            <Nav>
                <Nav.Link href={`/handbook/${data.path}`}>{data.sectionTitle}</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default TableOfContents;