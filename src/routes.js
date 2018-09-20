import {Provider} from "mobx-react";
import React from "react";
import Loadable from "react-loadable";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home";
import authStore from "./stores/authStore";
import Sponsor from "./components/sponsor";
import Loading from "./components/loading";


const stores = {
  authStore
};

const LoadableWithAuthenticationRoutes = Loadable({
  loader: () => import("./withAuthenticationRoutes"),
  loading: Loading
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sponsor" component={Sponsor} />
      <Provider {...stores}>
        <LoadableWithAuthenticationRoutes />
      </Provider>
    </Switch>
  );
};

export default Routes;
