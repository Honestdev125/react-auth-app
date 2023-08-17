const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Manrope", ...defaultTheme.fontFamily.sans],
            },
            width: {
                '1440': '1440px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};