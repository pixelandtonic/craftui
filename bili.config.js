module.exports = {
    input: './src/index.js',
    moduleName: 'CraftUi',
    exports: 'named',
    format: 'umd,es,cjs,umd-min',
    postcss: {
        extract: true,
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
        ]
    },
    plugins: [
        "babel",
        require("rollup-plugin-vue")({
            css: false,
        }),
    ],
};