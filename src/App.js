import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/main.sass";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Login from "./components/Login";

import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact={true} path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.LOGIN} component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
