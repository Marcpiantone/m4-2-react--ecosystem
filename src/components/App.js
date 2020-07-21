import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
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
