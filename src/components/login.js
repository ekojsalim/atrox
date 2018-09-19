import React, {Component} from "react";
import AuthUI from "react-firebaseui/StyledFirebaseAuth";

import firebase from "../firebase";
import {inject, observer} from "mobx-react";
import backgroundPic from "../images/back2.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import {Redirect} from "react-router-dom";
import Paper from "@material-ui/core/Paper/Paper";

const styles = {
  background: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${backgroundPic})`,
    height: "100vh",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  loginContainer: {},
  headline: {
    color: "white",
    display: "block"
  }
};

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

@withStyles(styles)
@inject("authStore")
@observer
class Login extends Component {
  render() {
    const {classes, authStore} = this.props;
    const dataComplete = authStore.authUserName && authStore.authUserEmail;

    return (
      <main className={classes.background}>
        {authStore.loggedIn && dataComplete ? <Redirect to="/dashboard"/> : ""}
        <div className={classes.loginContainer}>
          {authStore.loggedIn ?
            <div>
              <Paper>
                {authStore.authUserId}
              </Paper>
            </div> :
            <AuthUI uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
          }
        </div>
      </main>
    );
  }
}

export default Login;
