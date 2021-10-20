import * as React from "react";
import { Route, Switch } from "react-router";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/profile/home" component={Home} />
      <Route exact path="/profile/projects" component={Projects} />
      <Route exact path="/profile/about" component={About} />
    </Switch>
  );
}
