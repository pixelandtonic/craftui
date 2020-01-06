const path = require("path");

module.exports = ({config}) => {
    // Add support for .scss files.
    config.module.rules.push({
        test: /\.(scss)$/,
        include: path.resolve(__dirname, "../src/sass/"),
        loaders: [
            require.resolve("style-loader"),
            require.resolve("css-loader"),
            require.resolve("sass-loader"),
        ],
    });
    config.resolve.extensions.push(".scss");

    // Storysource
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
    });

    return config;
};