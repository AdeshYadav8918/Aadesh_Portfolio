// postcss.config.cjs

// Require the necessary PostCSS plugins
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

// Export the PostCSS configuration
module.exports = {
    plugins: [
        tailwindcss(), // Require Tailwind CSS
        autoprefixer(), // Automatically adds vendor prefixes
    ]
};
