module.exports = {
    plugins: [
        require('tailwindcss-rtl'),
        require('@tailwindcss/custom-forms'),
        require('./tailwind/plugin'),
    ],
    prefix: 'tw-',
}