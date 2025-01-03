/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                'primary': '#16a34a',
                'primary-dark': '#15803d',

                'background': '#F3F4F6',

                'secondary': '#9CA3AF',
                'secondary-dark': '#3C4C63',
                'secondary-darker': '#374151',
            },
        },
    },
    plugins: [],
}