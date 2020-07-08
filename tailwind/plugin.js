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
                            checkbox: {
                                borderRadius: theme('borderRadius.sm'),
                                icon: iconColor => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="${iconColor}" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>`,
                                '&:checked': {
                                    backgroundSize: '80% 80%',
                                },
                            },
                            radio: {
                                borderColor: theme('colors.gray.300'),
                            },
                            select: {
                                backgroundColor: theme('colors.cool-gray.200'),
                                backgroundImage: undefined,
                                borderRadius: theme('borderRadius.md'),
                                '&:hover': {
                                    backgroundColor: theme('colors.cool-gray.300'),
                                    borderColor: theme('colors.cool-gray.300'),
                                }
                            }
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