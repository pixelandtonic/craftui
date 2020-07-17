const baseColors = require('../colors/colors')

module.exports = function(pluginOptions) {
    if (pluginOptions.colors) {
        return pluginOptions.colors
    }

    return baseColors
}