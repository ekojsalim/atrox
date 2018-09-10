import React from "react";
import { Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("authStore")
@observer
export default class PrivateRoute extends React.Component {
  render() {
    const { authStore, ...restProps } = this.props;
    if (authStore.authUser) return <Route {...restProps} />;
    return <Redirect to="/login" />;
  }
}
