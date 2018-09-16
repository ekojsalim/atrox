import { Provider } from "mobx-react";
import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import authStore from "./stores/authStore";
import { CircularProgress } from "@material-ui/core";
import Sponsor from "./components/sponsor";

const stores = {
  authStore
};

const LoadableWithAuthenticationRoutes = Loadable({
  loader: () => import("./withAuthenticationRoutes"),
  loading: CircularProgress
});

const LoadableScanner = Loadable({
  loader: () => import("./components/scanner"),
  loading: CircularProgress
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/scan" component={LoadableScanner} />
      <Route exact path="/sponsor" component={Sponsor} />
      <Provider {...stores}>
        <LoadableWithAuthenticationRoutes />
      </Provider>
    </Switch>
  );
};

export default Routes;
