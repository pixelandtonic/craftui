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
    plugins: {
        babel: true,
        'node-resolve': true,
        vue: {
            css: false,
        },
        svg: true,
    },
};