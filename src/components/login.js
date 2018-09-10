import React, { Component } from "react";
import AuthUI from "react-firebaseui/StyledFirebaseAuth";

import firebase from "../firebase";
import { inject, observer } from "mobx-react";

@inject("authStore")
@observer
class Login extends Component {

  render() {
    console.log(firebase.auth());
    const loginSuccess = (auth) => {
      this.props.authStore.setUser(auth);
      this.props.history.push("/dashboard");
    }
    const uiConfig = {
      signInOptions: [
        {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: "ID",
        recaptchaParameters: {
          size: "invisible"
        }
      }
      ],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult) {
          loginSuccess(authResult);
        }
      }
    };

    return (
      <div>
        <AuthUI uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default Login;