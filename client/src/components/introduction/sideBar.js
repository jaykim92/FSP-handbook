import React from "react";

// import react-bootstrap components
import { NavLink } from "react-router-dom";

function SideBar({title, tag, href}) {
  return (
    <>
      <NavLink
        to={`/handbook/introduction/#${href}`}
        className="text-muted"
        activeClassName="active"
      >
        {title}
      </NavLink>
    </>
  );
}

export default SideBar;
