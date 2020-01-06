const { borderColor } = require('tailwindcss/defaultTheme')
const semanticTailwindColors = require('./src/colors/semanticTailwindColors')
const semanticColors = require('./src/colors/semanticColors')



module.exports = {
    // Variants
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },

    // Extend colors
    theme: {
        extend: {
            // Add semantic colors to the existing Tailwind color palette
            colors: semanticTailwindColors,

            // Tweak border’s default color
            borderColor: {
                ...borderColor,
                default: semanticTailwindColors['separator']
            }
        }
    },

    plugins: [
        function({addBase, theme}) {
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

                // Misc
                'label': {
                    display: 'inline-block',
                    marginBottom: theme('margin.1'),
                },
            })
        },

        // Add components
        function({ addComponents, theme }) {
            const buttons = {
                '.xbtn': {
                    backgroundColor: theme('colors.secondary-background'),
                    padding: theme('spacing.4'),
                    borderRadius: theme('borderRadius.lg'),
                    fontWeight: theme('fontWeight.extraBold'),
                },
                '.xbtn > .xicon': {
                    width: 20,
                    height: 20,
                    background: 'red',
                    display: 'inline-block  ',
                },
                '.xbtn-primary': {
                    backgroundColor: theme('colors.interactive-primary'),
                    color: theme('colors.interactive-primary-text'),
                    '&:hover': {
                        backgroundColor: theme('colors.interactive-primary-hover'),
                        cursor: 'pointer'
                    },
                    '&:active': {
                        backgroundColor: theme('colors.interactive-primary-active')
                    },
                },
                '.xbtn-danger': {
                    backgroundColor: theme('colors.interactive-danger'),
                    color: theme('colors.interactive-danger-text'),
                    '&:hover': {
                        backgroundColor: theme('colors.interactive-danger-hover'),
                        cursor: 'pointer'
                    },
                    '&:active': {
                        backgroundColor: theme('colors.interactive-danger-active')
                    },
                },
            }

            addComponents(buttons)
        }
    ]
}