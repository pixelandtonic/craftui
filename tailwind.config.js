// const { colors } = require('tailwindcss/defaultTheme')

const semanticColors = require('./src/semanticColors')

module.exports = {
    // Extend colors
    theme: {
        extend: {
            colors: semanticColors
        }
    },
}