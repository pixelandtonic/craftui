const { borderColor } = require('tailwindcss/defaultTheme')

const semanticColors = require('./src/semanticColors')

module.exports = {
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },

    // Extend colors
    theme: {
        extend: {
            colors: semanticColors,
            borderColor: {
                ...borderColor,
                default: semanticColors['separator']
            }
        }
    },

    plugins: [
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