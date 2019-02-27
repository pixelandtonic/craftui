const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    // Add support for .scss files.
    defaultConfig.module.rules.push({
        test: /\.(scss)$/,
        include: path.resolve(__dirname, "../src/sass/"),
        loaders: [require.resolve("style-loader"), require.resolve("css-loader"), require.resolve("sass-loader")],
    });
    defaultConfig.resolve.extensions.push(".scss");

    return defaultConfig;
};