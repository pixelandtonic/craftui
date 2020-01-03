const semanticColors = require('./semanticColors')

let semanticTailwindColors = {};

// Define a CSS `--craftui-` variable for each semantic color key
for (let key in semanticColors) {
    if (semanticColors.hasOwnProperty(key)) {
        semanticTailwindColors[key] = 'var(--craftui-'+key+')'
    }
}

module.exports = semanticTailwindColors
