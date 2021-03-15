import React from "react";

// import the different handbook content pages
import Introduction from "./introduction/introduction";
import Search from "./search/search";


// import text from utils
import introductionText from "../utils/introductionText.json";

// import react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HandbookContent() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/handbook/introduction">
            {/* {introductionText.map((item, i) => (
              <Introduction key={i} data={item} />
            ))} */}
            <Introduction />
          </Route>
          <Route path="/handbook/roles-and-responsibilities"></Route>
          <Route path="/handbook/phases-of-treatment"></Route>
          <Route path="/handbook/EHR"></Route>
          <Route path="/handbook/data-collection"></Route>
          <Route path="/handbook">
            <Search />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default HandbookContent;
