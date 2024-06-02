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
    extend: {},
  },
  plugins: [],
}

