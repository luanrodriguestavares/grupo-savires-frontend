/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                'primary': '#16a34a',
                'primary-dark': '#15803d',

                'secondary': '#F3F4F6',

                'gray': '#9CA3AF',
                'gray-dark': '#3C4C63',
                'gray-darker': '#374151',
            },
        },
    },
    plugins: [],
}