import React from "react";
import { inject, observer } from "mobx-react";
import Link from "react-router-dom/Link";

@inject("authStore")
@observer
class Home extends React.Component {
  render() {
    return (
      <p>{JSON.stringify(this.props.authStore.authUser)} <Link to="/dashboard">Dashboard</Link> <Link to="/login">Login</Link></p>
    );
  }
}

export default Home;