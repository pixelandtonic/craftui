const baseSemanticColors = require('./semanticColors')

module.exports = function(pluginOptions) {
    let optionsSemanticColors = {}

    if (pluginOptions && pluginOptions.semanticColors) {
        optionsSemanticColors = pluginOptions.semanticColors
    }

    return {
        ...baseSemanticColors,
        ...optionsSemanticColors,
    }
}