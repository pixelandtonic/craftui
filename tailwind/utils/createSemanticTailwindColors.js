const createSemanticColors = require('./createSemanticColors')

module.exports = function(colors) {
    const semanticColors = createSemanticColors(colors)

    let semanticTailwindColors = {};

    // Define a CSS `--craftui-` variable for each semantic color key
    for (let key in semanticColors) {
        if (semanticColors.hasOwnProperty(key)) {
            semanticTailwindColors[key] = 'var(--craftui-'+key+')'
        }
    }

    return semanticTailwindColors
}
