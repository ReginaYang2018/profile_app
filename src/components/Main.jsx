import React from "react";
import { Switch, Route } from "react-router-dom";
import EditProfile from "./edit";
import User from "./user";
import About from "./about";
import Record from "./record";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={User} />
      <Route exact path="/about" component={About} />
      <Route exact path="/add" component={EditProfile} />
      <Route exact path="/test" component={Record} />
    </Switch>
  </main>
);

export default Main;