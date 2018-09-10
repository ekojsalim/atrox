import React, { Component } from "react";
import AuthUI from "react-firebaseui/StyledFirebaseAuth";

import firebase from "../firebase";
import { inject, observer } from "mobx-react";
import Redirect from "react-router-dom/Redirect";
@inject("authStore")
@observer
class Login extends Component {
  render() {
    const uiConfig = {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "ID",
          recaptchaParameters: {
            size: "invisible"
          }
        }
      ]
    };

    return (
      <div>
        {this.props.authStore.authUser ? (
          <Redirect to="dashboard" />
        ) : (
          <AuthUI uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        )}
      </div>
    );
  }
}

export default Login;
