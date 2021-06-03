const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    experimental: {
        applyComplexClasses: true,
        extendedSpacingScale: true,
        defaultLineHeights: true,
        extendedFontSizeScale: true,
    },
    purge: [
        'src/buddylistclient/renderer/**/*.cljs',
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}