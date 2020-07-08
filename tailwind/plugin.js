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
        const spacing = {
            px: '1px',
            '0': '0',
            '0.5': '0.125rem',
            '1': '0.25rem',
            '1.5': '0.375rem',
            '2': '0.5rem',
            '2.5': '0.625rem',
            '3': '0.75rem',
            '3.5': '0.875rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '7': '1.75rem',
            '8': '2rem',
            '9': '2.25rem',
            '10': '2.5rem',
            '11': '2.75rem',
            '12': '3rem',
            '13': '3.25rem',
            '14': '3.5rem',
            '15': '3.75rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '28': '7rem',
            '32': '8rem',
            '36': '9rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '60': '15rem',
            '64': '16rem',
            '72': '18rem',
            '80': '20rem',
            '96': '24rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
        }

        return {
            variants: {
                // Add `active` variant to `backgroundColor`
                backgroundColor: ['responsive', 'hover', 'focus', 'active'],

                // Add `hover` variant to `inset`
                inset: ['responsive', 'hover'],
            },

            theme: {
                colors,
                spacing,
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