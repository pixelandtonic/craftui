const semanticColors = require('./semanticColors')

let semanticTailwindColors = {};

for (let key in semanticColors) {
    if (semanticColors.hasOwnProperty(key)) {
        semanticTailwindColors[key] = 'var(--craftui-'+key+')'
    }
}
module.exports = semanticTailwindColors