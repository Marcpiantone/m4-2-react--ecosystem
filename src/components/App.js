import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../globalstyles";

import Header from "./Header.js";
import Homepage from "./Homepage.js";
import About from "./About";
// import ItemDetails from "./ItemDetails  ";

const App = (sellers, items) => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">{/* <ItemDetails /> */}</Route>
      </Switch>
    </Router>
  );
};

export default App;
