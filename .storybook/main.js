const path = require("path");
const webpackConfig = require("../webpack.config")
module.exports = {
  stories: ["../src/**/*stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    config.module.rules.push(webpackConfig.module.rules[0]);
    config.module.rules.push(webpackConfig.module.rules[1]);
    config.resolve.extensions.push("less");

    return config;
  }
}
