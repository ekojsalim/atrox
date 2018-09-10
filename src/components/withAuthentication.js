import React from "react";
import { inject } from "mobx-react";

import firebase from "../firebase";

const withAuthentication = Component => {
  @inject("authStore")
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { authStore } = this.props;

      firebase.auth().onAuthStateChanged(authUser => {
        authUser
          ? authStore.setUser(authUser)
          : authStore.setUser(null);
      });
    }

    render() {
      return <Component />;
    }
  }

  return (WithAuthentication);
};

export default withAuthentication;
