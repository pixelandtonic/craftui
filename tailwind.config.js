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
            let lightLowContrastColors = {}

            for (let key in semanticColors.light.lowContrast) {
                if (semanticColors.light.lowContrast.hasOwnProperty(key)) {
                    lightLowContrastColors['--craftui-'+key] = semanticColors.light.lowContrast[key]
                }
            }

            let lightHighContrastColors = {}

            for (let key in semanticColors.light.highContrast) {
                if (semanticColors.light.highContrast.hasOwnProperty(key)) {
                    lightHighContrastColors['--craftui-'+key] = semanticColors.light.highContrast[key]
                }
            }

            let darkLowContrastColors = {}

            for (let key in semanticColors.dark.lowContrast) {
                if (semanticColors.dark.lowContrast.hasOwnProperty(key)) {
                    darkLowContrastColors['--craftui-'+key] = semanticColors.dark.lowContrast[key]
                }
            }

            let darkHighContrastColors = {}

            for (let key in semanticColors.dark.highContrast) {
                if (semanticColors.dark.highContrast.hasOwnProperty(key)) {
                    darkHighContrastColors['--craftui-'+key] = semanticColors.dark.highContrast[key]
                }
            }

            addBase({
                'body': lightLowContrastColors,
                'body.high-contrast, body.theme-dark.high-contrast': lightHighContrastColors,
                'body.theme-dark': darkLowContrastColors,
                'body.theme-dark.high-contrast': darkHighContrastColors,
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