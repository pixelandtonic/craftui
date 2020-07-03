const plugin = require('tailwindcss/plugin')
const colors = require('../src/colors/colors')
const { borderColor } = require('tailwindcss/defaultTheme')
const semanticTailwindColors = require('../src/colors/semanticTailwindColors')
const semanticColors = require('../src/colors/semanticColors')

module.exports = plugin.withOptions(
    function(pluginOptions) {
        return function(options) {
            const { addBase, addUtilities, theme } = options

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

            if (pluginOptions.darkModeSupport === true) {
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

            // Override Tailwind UI utilities
            const newUtility = {
                '.form-select': {
                    'border-radius': theme('borderRadius.default')
                }
            }

            addUtilities(newUtility)
        }
    },

    function(options = {}) {
        return {
            variants: {
                // Add `active` variant to `backgroundColor`
                backgroundColor: ['responsive', 'hover', 'focus', 'active'],

                // Add `hover` variant to `inset`
                inset: ['responsive', 'hover'],
            },

            theme: {
                colors,

                extend: {
                    // Add semantic colors to the existing Tailwind color palette
                    colors: semanticTailwindColors,

                    // Tweak border’s default color
                    borderColor: {
                        ...borderColor,
                        default: semanticTailwindColors['separator']
                    },

                    // Tweak custom form defaults
                    customForms: theme => ({
                        default: {
                            input: {
                                '&::placeholder': {
                                    color: theme('colors.light-text'),
                                    opacity: '1',
                                },
                            },
                        },
                    }),

                    // Negative inset
                    inset: (theme, {negative}) => ({
                        ...negative(theme('spacing')),
                    }),
                },
            },

        }
    }
)