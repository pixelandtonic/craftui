const baseColors = require('./colors')

module.exports = function(pluginOptions) {
    if (pluginOptions.colors) {
        return pluginOptions.colors
    }

    return baseColors
}