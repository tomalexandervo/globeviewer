const tailwindcss = require('tailwindcss');

module.exports = {
    theme: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'robotomono': ['roboto mono', 'monospace'] // Ensure fonts with spaces have " " surrounding it.
      },
    },
    variants: {
      // N/A
    },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
  }