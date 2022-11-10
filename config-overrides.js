const { override, addWebpackAlias, addBabelPlugins } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src", "components"),
    "@assets": path.resolve(__dirname, "src", "assets"),
    "@hooks": path.resolve(__dirname, "src", "hooks"),
    "@contexts": path.resolve(__dirname, "src", "contexts"),
  }),
  ...addBabelPlugins(["babel-plugin-styled-components"])
);
