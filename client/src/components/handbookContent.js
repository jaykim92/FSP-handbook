import React from "react";

// import the different handbook content pages
import Introduction from "../pages/introduction";

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
              <h1>Introduction to Program Goals and Services</h1>
              {introductionText.map((item, i) => (
                <Introduction key={i} data={item} />
              ))}
          </Route>
          <Route path="/handbook/roles-and-responsibilities">

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default HandbookContent;
