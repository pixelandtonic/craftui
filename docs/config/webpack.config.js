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
            {
                loader: require.resolve("postcss-loader"),
                options: {
                    // Enable source maps
                    sourceMap: true,

                    // Set postcss.config.js config path && ctx
                    config: {
                        path: './docs/config/',
                    },
                },
            },
        ],
    });
    config.resolve.extensions.push(".scss");

    // Storysource
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    return config;
};