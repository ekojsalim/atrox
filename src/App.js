import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import PrivateRoute from "./components/privateroute";

import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

// Stores
import authStore from "./stores/authStore";

const stores = {
  authStore
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
