import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "@pages/home";
import SignIn from "./pages/sign-in";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/sign-in" exact component={SignIn}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
