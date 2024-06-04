/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screen: {
      'mobile': {'max': '1023'},
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: {transform: 'translateX(100%)'},
          to: {transform: 'translateX(-100%)'},
        },
      },
    },
  },
  plugins: [],
}