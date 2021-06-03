const path = require('path')

module.exports = (ctx) => ({
    plugins: [
        require('postcss-import')(),
        require('tailwindcss')(),
        require('autoprefixer')()
    ]
})