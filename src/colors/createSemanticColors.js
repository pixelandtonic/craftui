const baseSemanticColors = require('./semanticColors')

module.exports = function(colors, pluginOptions) {
    let optionsSemanticColors = {}

    if (pluginOptions && pluginOptions.semanticColors) {
        optionsSemanticColors = pluginOptions.semanticColors
    }

    return {
        ...baseSemanticColors(colors),
        ...optionsSemanticColors,
    }
}