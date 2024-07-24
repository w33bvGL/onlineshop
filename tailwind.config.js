/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'nunito': ['nunito', 'sans-serif'],
            },
            colors: {
                'custom-green': '#87B257',
                'custom-green-600': '#8ABD58',
                'custom-green-700': '#9BD55D',
                'custom-green-800': '#85B056',
                'custom-green-900': '#B4D293',
                'custom-green-1000': '#9CD65D',
                'custom-green-1100': '#86B157',
                'custom-green-1200': '#85B352',
                'custom-red': '#F24B1E',
            },
            aspectRatio: {
                '1/3': '1 / 1.3',
            },
        },
    },
    plugins: [],
}
