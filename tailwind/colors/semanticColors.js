module.exports = function(colors) {
    return {
        // Base
        'info': {
            light: colors.blue[500],
            dark: colors.blue[500],
        },
        'success': {
            light: colors.green[500],
            dark: colors.green[500],
        },
        'warning': {
            light: colors.yellow[500],
            dark: colors.yellow[500],
        },
        'danger': {
            light: colors.red[500],
            dark: colors.red[500],
        },

        // Background
        'danger-background': {
            light: colors.red[200],
            dark: colors.red[800],
        },
        'default-background': {
            light: colors['cool-gray'][200],
            dark: colors['cool-gray'][600],
        },
        'field-background': {
            light: colors.white,
            dark: colors['cool-gray'][700],
        },
        'info-background': {
            light: colors.blue[200],
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
            light: colors['cool-gray'][50],
            dark: colors['cool-gray'][700],
        },
        'success-background': {
            light: colors.green[200],
            dark: colors.green[800],
        },
        'warning-background': {
            light: colors.yellow[200],
            dark: colors.yellow[800],
        },

        // Text
        'danger-text': {
            light: colors.red[800],
            dark: colors.red[200],
        },
        'dark-text': {
            light: colors['cool-gray'][800],
            dark: colors['cool-gray'][200],
        },
        'default-text': {
            light: colors['cool-gray'][800],
            dark: colors['cool-gray'][200],
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
            light: colors['cool-gray'][400],
            dark: colors['cool-gray'][400],
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
            light: colors.yellow[800],
            dark: colors.yellow[200],
        },

        // Separator
        'danger-separator': {
            light: colors.red[400],
            dark: colors.red[400],
        },
        'field-separator': {
            light: colors['cool-gray'][300],
            dark: colors['cool-gray'][600],
            highContrast: colors['cool-gray'][500]
        },
        'info-separator': {
            light: colors.blue[400],
            dark: colors.blue[400],
        },

        'separator': {
            light: colors['cool-gray'][200],
            dark: colors['cool-gray'][700],
            highContrast: colors['cool-gray'][500],
            darkHighContrast: colors['cool-gray'][500],
        },
        'ui-opaque-separator': {
            light: colors['cool-gray'][300],
            highContrast: colors['cool-gray'][700],
            dark: colors.black,
            darkHighContrast: colors['cool-gray'][500],
        },
        'ui-separator': {
            light: colors['cool-gray'][200],
            dark: colors.black,
            highContrast: colors['cool-gray'][500],
            darkHighContrast: colors['cool-gray'][500],
        },
        'success-separator': {
            light: colors.green[400],
            dark: colors.green[400],
        },
        'warning-separator': {
            light: colors.yellow[400],
            dark: colors.yellow[400],
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
            light: colors.blue[500],
            dark: colors.blue[600],
        },
        'interactive-secondary': {
            light: colors['cool-gray'][200],
            dark: colors['cool-gray'][700],
        },
        'interactive-success': {
            light: colors.green[500],
            dark: colors.green[500],
        },
        'interactive-tertiary': {
            light: colors['cool-gray'][600],
            dark: colors['cool-gray'][400],
        },

        // Interactive Active
        'interactive-danger-active': {
            light: colors.red[800],
            dark: colors.red[800],
        },
        'interactive-primary-active': {
            light: colors.blue[800],
            dark: colors.blue[400],
        },
        'interactive-secondary-active': {
            light: colors['cool-gray'][400],
            dark: colors['cool-gray'][500],
        },
        'interactive-success-active': {
            light: colors.green[800],
            dark: colors.green[200],
        },
        'interactive-tertiary-active': {
            light: colors['cool-gray'][900],
            dark: colors['cool-gray'][100],
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
            light: colors.blue[700],
            dark: colors.blue[500],
        },
        'interactive-secondary-hover': {
            light: colors['cool-gray'][300],
            dark: colors['cool-gray'][600],
        },
        'interactive-success-hover': {
            light: colors.green[600],
            dark: colors.green[400],
        },
        'interactive-tertiary-hover': {
            light: colors['cool-gray'][700],
            dark: colors['cool-gray'][300],
        },

        // Disabled
        'field-disabled-background': {
            light: colors['cool-gray'][100],
            dark: colors['cool-gray'][700],
        },
        'field-disabled-separator': {
            light: colors['cool-gray'][300],
            dark: colors['cool-gray'][600],
            highContrast: colors['cool-gray'][500]
        },

        // Gradients
        'primary-gradient-1': {
            light: 'rgba(255, 255, 255, 0)',
            dark: 'rgba(39, 48, 63, 0)',
        },
        'primary-gradient-2': {
            light: 'rgba(255, 255, 255, 1)',
            dark: 'rgba(39, 48, 63, 1)',
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
}
