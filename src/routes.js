import React from "react";
import { Route, Switch } from "react-router-dom";

import withAuthentication from "./components/withAuthentication";

import PrivateRoute from "./components/privateroute";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";


const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default withAuthentication(routes);
