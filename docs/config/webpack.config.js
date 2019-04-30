const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    // Add support for .scss files.
    defaultConfig.module.rules.push({
        test: /\.(scss)$/,
        include: path.resolve(__dirname, "../src/sass/"),
        loaders: [require.resolve("style-loader"), require.resolve("css-loader"), require.resolve("sass-loader")],
    });
    defaultConfig.resolve.extensions.push(".scss");

    // Storysource
    defaultConfig.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    return defaultConfig;
};