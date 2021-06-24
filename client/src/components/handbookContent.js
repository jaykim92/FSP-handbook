import React from "react";

// import the different handbook content pages
import Introduction from "./introduction/introduction";
import Search from "./search/search";
import Treatment from "./treatment/treatment";

// import react-router-dom
import { Switch, Route } from "react-router-dom";

function HandbookContent() {
  return (
    <>
      <Switch>
        <Route path="/handbook/introduction">
          <Introduction />
        </Route>
        <Route path="/handbook/roles-and-responsibilities"></Route>
        <Route path="/handbook/phases-of-treatment">
          <Treatment />
        </Route>
        <Route path="/handbook/EHR"></Route>
        <Route path="/handbook/data-collection"></Route>
        <Route path="/handbook">
          <Search />
        </Route>
      </Switch>
    </>
  );
}

export default HandbookContent;
