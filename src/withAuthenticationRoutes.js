import React from "react";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/privateroute";
import withAuthentication from "./components/withAuthentication";
import Loadable from "react-loadable";
import {CircularProgress} from "@material-ui/core";

const LoadableLogin = Loadable({
  loader: () => import("./components/login"),
  loading: CircularProgress
});

const LoadableDashboard = Loadable({
  loader: () => import("./components/dashboard"),
  loading: CircularProgress
});

const WithAuthenticationRoutes = withAuthentication(() => {
  return (
    <Switch>
      <Route path="/signup" component={LoadableLogin}/>
      <PrivateRoute path="/dashboard" component={LoadableDashboard} />  
    </Switch>
  );
});

export default WithAuthenticationRoutes;