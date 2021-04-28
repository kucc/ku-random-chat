import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "@pages/home";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
