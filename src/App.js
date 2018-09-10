import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";

import Routes from "./routes";

// Stores
import authStore from "./stores/authStore";

const stores = {
  authStore
};

class App extends Component {
  render() {
    return (
      <Router>
        <Provider {...stores}>
        <Routes />
        </Provider>
      </Router>
    );
  }
}

export default App;
