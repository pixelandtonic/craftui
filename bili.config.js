module.exports = {
    input: './src/craftui.js',
    output: {
        format: ['umd', 'umd-min', 'es', 'es-min', 'cjs', 'cjs-min', 'iife', 'iife-min'],
        // format: 'umd,es,cjs,umd-min',
        moduleName: 'CraftUi',
    },
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