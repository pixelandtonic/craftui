const _ = require('lodash')
const craftui = require('tailwindcss/plugin')
const { borderColor } = require('tailwindcss/defaultTheme')
const createColors = require('./utils/createColors')
const createSemanticTailwindColors = require('./utils/createSemanticTailwindColors')
const createSemanticColors = require('./utils/createSemanticColors')
const defaultConfig = require('./stubs/defaultConfig.stub')

const rtlPlugin = require('tailwindcss-rtl')
const customFormsPlugin = require('@tailwindcss/custom-forms')

module.exports = craftui.withOptions(
    function(pluginOptions) {
        return function(options) {
            const { addBase, addUtilities, theme, variants, e } = options

            // Call other plugins
            rtlPlugin.handler(options)
            customFormsPlugin(options)

            // Colors
            const colors = createColors(pluginOptions)
            const semanticColors = createSemanticColors(colors, pluginOptions)

            // Define CSS variables
            let baseStyleColors = {
                light: {},
                highContrast: {},
                dark: {},
                darkHighContrast: {},
            }

            for (let key in semanticColors) {
                if (semanticColors.hasOwnProperty(key)) {
                    if (semanticColors[key].light) {
                        baseStyleColors.light['--craftui-'+key] = semanticColors[key].light
                    }

                    if (semanticColors[key].highContrast) {
                        baseStyleColors.highContrast['--craftui-'+key] = semanticColors[key].highContrast
                    }

                    if (semanticColors[key].dark) {
                        baseStyleColors.dark['--craftui-'+key] = semanticColors[key].dark
                    }

                    if (semanticColors[key].darkHighContrast) {
                        baseStyleColors.darkHighContrast['--craftui-'+key] = semanticColors[key].darkHighContrast
                    }
                }
            }


            // Set colors for each context (light, dark, high contrast)

            addBase({
                // `light` color scheme
                'body': baseStyleColors.light,
            })

            if (pluginOptions && pluginOptions.darkModeSupport && pluginOptions.darkModeSupport === true) {
                addBase({
                    // `dark` color scheme
                    '@media (prefers-color-scheme: dark)': {
                        'body': baseStyleColors.dark,
                    },

                    // `high` contrast
                    '@media (prefers-contrast: high)': {
                        'body': baseStyleColors.highContrast,
                    },
                    '@media (prefers-color-scheme: dark) and (prefers-contrast: high)': {
                        'body': baseStyleColors.darkHighContrast,
                    },

                    // Add support for `.theme-light` to force `light` context
                    'body.theme-light': baseStyleColors.light,

                    // Add support for `.theme-dark` to force `dark` context
                    'body.theme-dark': baseStyleColors.dark,

                    // Add support for `.high-contrast` when browser don’t support `prefers-contrast`
                    'body.high-contrast, body.theme-dark.high-contrast': baseStyleColors.highContrast,
                    'body.theme-dark.high-contrast': baseStyleColors.darkHighContrast,
                })
            }

            addBase({
                // Misc
                'label': {
                    display: 'inline-block',
                    marginBottom: theme('margin.1'),
                },
            })


            // Gradients

            const gradients = theme('gradients', {})
            const gradientVariants = variants('gradients', [])
            const utilities = _.map(gradients, ([start, end], name) => ({
                [`.bg-gradient-${e(name)}`]: {
                    backgroundImage: `linear-gradient(to bottom, ${start}, ${end})`
                }
            }))

            addUtilities(utilities, gradientVariants)
        }
    },

    function(pluginOptions = {}) {
        const colors = createColors(pluginOptions)
        const semanticColors = createSemanticColors(colors, pluginOptions)
        const semanticTailwindColors = createSemanticTailwindColors(semanticColors)

        return _.merge(defaultConfig, {
            theme: {
                colors,
                extend: {
                    // Add semantic colors to the existing Tailwind color palette
                    colors: semanticTailwindColors,

                    // Tweak default border color
                    borderColor: {
                        ...borderColor,
                        default: semanticTailwindColors['separator']
                    },
                },
            },
        })
    }
)