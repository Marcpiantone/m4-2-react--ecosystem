import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../globalstyles";

import Header from "./Header.js";

const App = (props) => {
  console.log(props);
  return (
    <Router>
      <GlobalStyle />
      <Header></Header>
      <Switch>
        <Route exact path="/">
          Homepage
        </Route>
        <Route path="/about">About</Route>
      </Switch>
    </Router>
  );
};

export default App;
