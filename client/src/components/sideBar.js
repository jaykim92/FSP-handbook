import React from 'react';
import Nav from "react-bootstrap/Nav";

function SideBar() {
    return(
        <Nav className="flex-column">
            <Nav.Item>
                <Nav.Link>Introduction</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default SideBar;