const rewireMobX = require("react-app-rewire-mobx");
const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer");
const rewireImport = require("react-app-rewire-import");

module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  config = rewireImport(config, env, {
    libraryName: "@material-ui/core",
    libraryDirectory: "",
    camel2DashComponentName: false
  });
  if (env === "production") {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: "static",
      reportFilename: "report.html"
    });
  }
  return config;
};
