module.exports = {
    input: './src/app.js',
    moduleName: 'CraftUi',
    exports: 'named',
    format: 'umd,es,cjs,umd-min',
    plugins: [
        // require("rollup-plugin-sass")({
        //     css: false
        // }),
        // require("rollup-plugin-postcss")({
        //     plugins: [
        //
        //     ]
        // }),
        "babel",
        require("rollup-plugin-vue")(
            {
                css: false,
                compileTemplate: true,
                style: {
                    postcssPlugins: [
                        require('tailwindcss')('./tailwind-config.js'),
                    ]
                },
                // template: { optimizeSSR: true }
            }
        ),
/*        // Directly require
        require("rollup-plugin-foo")()*/
    ],
};