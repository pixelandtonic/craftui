const path = require('path');

module.exports = {
    resolve: {
        alias: {
            vue$: require.resolve('vue/dist/vue.esm.js'),
        }
    },
    module: {
        rules: [
            {
                test: [/\.stories\.js$/, /index\.js$/],
                loaders: [require.resolve('@storybook/addon-storysource/loader')],
                include: [path.resolve(__dirname, '../src')],
                enforce: 'pre',
            },
            // {
            //     test: /\.svg$/,
            //     loader: 'raw-loader'
            // }
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../src")
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../../dist")
            },
            {
                test: /\.vue$/,
                loaders: ["vue-loader"],
                include: path.resolve(__dirname, "../src")
            },
        ],
    },
};