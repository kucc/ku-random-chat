import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import GlobalStyle from "@components/common/global-style";
import Home from "@pages/home";
import SignIn from "./pages/sign-in";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/sign-in" exact component={SignIn}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
