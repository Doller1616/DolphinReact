module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [require('@tailwindcss/forms')],
} 