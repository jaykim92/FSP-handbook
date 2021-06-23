import React from "react";

// import react-bootstrap components
import { NavLink } from "react-router-dom";

function SideBar({title, href}) {
  return (
    <>
      <NavLink
        to={`/handbook/introduction/#test`}
        className="text-muted"
        activeClassName="is-active"
      >
        {title}
      </NavLink>
    </>
  );
}

export default SideBar;
