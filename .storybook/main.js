const path = require('path')

module.exports = {
  "typescript": { reactDocgen: false },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "features": {
    "storyStoreV7": true
  },
  "webpackFinal": async(config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve('src')
    }
    return config
  }
}
