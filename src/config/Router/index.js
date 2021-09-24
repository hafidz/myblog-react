import { MainApp, Portofolio } from "pages";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/portofolio">
          <Portofolio />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
