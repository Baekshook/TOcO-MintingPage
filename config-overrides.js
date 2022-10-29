const { override, addWebpackAlias, addBabelPlugins } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src", "components"),
  }),
  ...addBabelPlugins(["babel-plugin-styled-components"])
);
