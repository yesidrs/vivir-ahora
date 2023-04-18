/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            trasparent: 'transparent',
            white: '#FFFFFF',
            green: '#307671',
            gray: '#f4f5f7',
            'soft-gray': '#d1d5db',
            'dark-green': '#005650',
            'light-orange': '#FF9C85',
            'light-green': '#4ABD7F',
            'soft-green': '#558683',
        },
        fontFamily: {
            cursive: ['Righteous', 'cursive'],
            sans: ['Poppins', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
        },
    },
    plugins: [],
}
