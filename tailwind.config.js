/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'r-xl': { max: '1200px' },
        'r-lg': { max: '1023px' },
        'r-md': { max: '767px' },
        'r-sm': { max: '479px' },
        'r-xs': { max: '359px' },
      },
    },
  },
  plugins: [],
}
