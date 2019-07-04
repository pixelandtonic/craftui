module.exports = {
    input: './src/craftui.js',
    output: {
        format: ['umd', 'umd-min', 'es', 'es-min', 'cjs', 'cjs-min', 'iife', 'iife-min'],
        // format: 'umd,es,cjs,umd-min',
        moduleName: 'CraftUi',
    },
    plugins: {
        babel: true,
        'node-resolve': true,
        vue: {
            css: false,
        },
        svg: true,
        postcss: {
            extract: true,
            plugins: [
                require('tailwindcss')('./tailwind.config.js'),
            ]
        }
    },
};