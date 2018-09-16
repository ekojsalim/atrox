import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebFont from "webfontloader";

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
WebFont.load({
  google: {
    families: ["Roboto:300,400,500"]
  }
});
registerServiceWorker();
