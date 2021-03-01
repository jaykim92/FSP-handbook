import React from "react";

// import the different handbook content pages
import Introduction from "../pages/introduction";

// import react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HandbookContent() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/handbook/introduction">
                    <Introduction />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default HandbookContent;
