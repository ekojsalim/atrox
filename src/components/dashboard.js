import React, { Component } from "react";

import { inject, observer } from "mobx-react";

@inject("authStore")
@observer
class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>{JSON.stringify(this.props.authStore)}</p>
      </div>
    );
  }
}

export default Dashboard;