module.exports = {
    input: './src/index.js',
    moduleName: 'CraftUi',
    exports: 'named',
    format: 'umd,es,cjs,umd-min',
    plugins: [
        "babel",
        require("rollup-plugin-vue")(
            {
                css: false,
                style: {
                    postcssPlugins: [
                        require('tailwindcss')('./tailwind.config.js'),
                    ]
                },
                // template: { optimizeSSR: true }
            }
        ),
    ],
};