const rewireMobX = require("react-app-rewire-mobx");
const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer");

module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: "static",
      reportFilename: "report.html"
    });
  }
  return config;
};
