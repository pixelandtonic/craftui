const colors = require('./colors.js')

module.exports = {
    // Base
    'icon': {
        light: colors.gray[500],
        dark: colors.gray[500],
    },
    'info': {
        light: colors.blue[500],
        dark: colors.blue[500],
    },
    'success': {
        light: colors.green[500],
        dark: colors.green[500],
    },
    'warning': {
        light: colors.orange[500],
        dark: colors.orange[500],
    },
    'danger': {
        light: colors.red[500],
        dark: colors.red[500],
    },

    // Background
    'danger-background': {
        light: colors.red[100],
        dark: colors.red[800],
    },
    'field-background': {
        light: colors.white,
        dark: colors.gray[700],
    },
    'info-background': {
        light: colors.blue[100],
        dark: colors.blue[800],
    },
    'primary-background': {
        light: colors.white,
        dark: colors['cool-gray'][800],
    },
    'secondary-background': {
        light: colors['cool-gray'][100],
        dark: colors['cool-gray'][900],
    },
    'tertiary-background': {
        light: colors['cool-gray'][200],
        dark: colors['cool-gray'][800],
    },
    'success-background': {
        light: colors.green[100],
        dark: colors.green[800],
    },
    'warning-background': {
        light: colors.orange[100],
        dark: colors.orange[800],
    },

    // Text
    'danger-text': {
        light: colors.red[800],
        dark: colors.red[200],
    },
    'dark-text': {
        light: colors.gray[800],
        dark: colors.gray[200],
    },
    'info-text': {
        light: colors.blue[800],
        dark: colors.blue[200],
    },
    'interactive-text': {
        light: colors.black,
        dark: colors.white,
    },
    'interactive-text-inverse': {
        light: colors.white,
        dark: colors.white,
    },
    'light-text': {
        light: colors.gray[400],
        dark: colors.gray[600],
    },
    'success-text': {
        light: colors.green[800],
        dark: colors.green[200],
    },
    'text': {
        light: colors.black,
        dark: colors.white,
    },
    'text-inverse': {
        light: colors.white,
        dark: colors.black,
    },
    'warning-text': {
        light: colors.orange[800],
        dark: colors.orange[200],
    },

    // Separator
    'danger-separator': {
        light: colors.red[400],
        dark: colors.red[600],
    },
    'field-separator': {
        light: colors['cool-gray'][300],
        dark: colors['cool-gray'][700],
        highContrast: colors['cool-gray'][500]
    },
    'info-separator': {
        light: colors.blue[400],
        dark: colors.blue[400],
    },
    'opaque-separator': {
        light: colors.gray[400],
        highContrast: colors.gray[500],
        dark: colors.black,
        darkHighContrast: colors.gray[500],
    },
    'separator': {
        light: colors['cool-gray'][200],
        dark: colors.black,
        highContrast: colors['cool-gray'][500],
        darkHighContrast: colors['cool-gray'][500],
    },
    'success-separator': {
        light: colors.green[400],
        dark: colors.green[600],
    },
    'warning-separator': {
        light: colors.orange[400],
        dark: colors.orange[600],
    },

    // Interactive
    'interactive-danger': {
        light: colors.red[600],
        dark: colors.red[600],
    },
    'interactive-link': {
        light: colors.blue[600],
        dark: colors.blue[400],
    },
    'interactive-primary': {
        light: colors.red[500],
        dark: colors.red[500],
    },
    'interactive-secondary': {
        light: colors.gray[200],
        dark: colors.gray[800],
    },
    'interactive-success': {
        light: colors.green[500],
        dark: colors.green[500],
    },
    'interactive-tertiary': {
        light: colors.gray[600],
        dark: colors.gray[400],
    },

    // Interactive Active
    'interactive-danger-active': {
        light: colors.red[800],
        dark: colors.red[800],
    },
    'interactive-primary-active': {
        light: colors.red[800],
        dark: colors.red[800],
    },
    'interactive-secondary-active': {
        light: colors.gray[400],
        dark: colors.gray[600],
    },
    'interactive-success-active': {
        light: colors.green[800],
        dark: colors.green[200],
    },
    'interactive-tertiary-active': {
        light: colors.gray[900],
        dark: colors.gray[100],
    },

    // Interactive Hover
    'interactive-danger-hover': {
        light: colors.red[700],
        dark: colors.red[700],
    },
    'interactive-link-hover': {
        light: colors.blue[800],
        dark: colors.blue[200],
    },
    'interactive-primary-hover': {
        light: colors.red[700],
        dark: colors.red[700],
    },
    'interactive-secondary-hover': {
        light: colors.gray[300],
        dark: colors.gray[700],
    },
    'interactive-success-hover': {
        light: colors.green[600],
        dark: colors.green[400],
    },
    'interactive-tertiary-hover': {
        light: colors.gray[700],
        dark: colors.gray[300],
    },

    // Disabled
    'field-disabled-background': {
        light: colors.gray[100],
        dark: colors.gray[700],
    },
    'field-disabled-separator': {
        light: colors.gray[300],
        dark: colors.gray[600],
        highContrast: colors.gray[500]
    },

    // Gradients
    'primary-gradient-1': {
        light: 'rgba(255, 255, 255, 0)',
        dark: 'rgba(26, 32, 44, 0)',
    },
    'primary-gradient-2': {
        light: 'rgba(255, 255, 255, 1)',
        dark: 'rgba(26, 32, 44, 1)',
    },

    // Shadows
    'shadow-1': {
        light: 'rgba(0, 0, 0, 0.1)',
        dark: 'rgba(0, 0, 0, 0.1)',
    },
    'shadow-04': {
        light: 'rgba(0, 0, 0, 0.04)',
        dark: 'rgba(0, 0, 0, 0.04)',
    },
    'shadow-05': {
        light: 'rgba(0, 0, 0, 0.05)',
        dark: 'rgba(0, 0, 0, 0.05)',
    },
    'shadow-06': {
        light: 'rgba(0, 0, 0, 0.06)',
        dark: 'rgba(0, 0, 0, 0.06)',
    },
    'shadow-25': {
        light: 'rgba(0, 0, 0, 0.25)',
        dark: 'rgba(0, 0, 0, 0.25)',
    },
    'shadow-outline': {
        light: 'rgba(66, 153, 225, 0.5)',
        dark: 'rgba(66, 153, 225, 0.5)',
    },
}
