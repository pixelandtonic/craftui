// const { colors } = require('tailwindcss/defaultTheme')
const semanticColors = require('./semanticColors')

let semanticTailwindColors = {};

for (let key in semanticColors.light.lowContrast) {
    if (semanticColors.light.lowContrast.hasOwnProperty(key)) {
        semanticTailwindColors[key] = 'var(--craftui-'+key+')'
    }
}
module.exports = semanticTailwindColors