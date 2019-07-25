const { borderColor } = require('tailwindcss/defaultTheme')
const semanticTailwindColors = require('./src/semanticTailwindColors')
const semanticColors = require('./src/semanticColors')

module.exports = {
    // Variants
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },

    // Extend colors
    theme: {
        extend: {
            colors: semanticTailwindColors,
            borderColor: {
                ...borderColor,
                default: semanticTailwindColors['separator']
            }
        }
    },

    plugins: [
        // Add base styles
        function({ addBase}) {
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

            addBase({
                'body': baseStyleColors.light,
                'body.high-contrast, body.theme-dark.high-contrast': baseStyleColors.highContrast,
                'body.theme-dark': baseStyleColors.dark,
                'body.theme-dark.high-contrast': baseStyleColors.darkHighContrast,
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