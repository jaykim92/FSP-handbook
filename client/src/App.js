import React from "react";
import "./App.css";

// import page components
import Front from "./pages/front";
import Handbook from "./pages/handbook";
import Links from "./pages/links";

// import react-router-dom
// note: put router at top level and only use once
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/handbook">
              <Handbook />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/">
              <Front />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
