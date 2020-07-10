const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    'storybook-dark-mode/register',
    'storybook-rtl-addon/register'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules = config.module.rules.filter(rule => !rule.test.test(".scss"));

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [path.resolve(__dirname, '../src/sass/'), path.resolve(__dirname, '../../src/')],
    });

    // Return the altered config
    return config;
  },
};
