import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Home from "./components/Home";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
);
