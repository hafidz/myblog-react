import { Home, Portofolio } from "pages";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MainApp() {
  return (
    <div>
      <p>HEader</p>
      <Router>
        <Switch>
          <Route path="/detail">
            <Portofolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <p>Footer</p>
    </div>
  );
}
