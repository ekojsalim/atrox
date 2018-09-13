import React from "react";
import { Route, Switch } from "react-router-dom";

import withAuthentication from "./components/withAuthentication";

import PrivateRoute from "./components/privateroute";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

import authStore from "./stores/authStore";
import { Provider } from "mobx-react";
const stores = {
  authStore
};

const WithAuthenticationRoutes = withAuthentication(() => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />  
    </Switch>
  );
});

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Provider {...stores}>
        <WithAuthenticationRoutes />
      </Provider>
    </Switch>
  );
};

export default routes;
