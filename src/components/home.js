import React from "react";
import { inject, observer } from "mobx-react";

@inject("authStore")
@observer
class Home extends React.Component {
  render() {
    return (
      <p>{JSON.stringify(this.props.authStore)}</p>
    );
  }
}

export default Home;