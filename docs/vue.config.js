module.exports = {
    outputDir: 'docs/dist/',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                ]
            }
        }
    }
}
