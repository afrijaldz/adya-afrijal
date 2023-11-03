/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f9f5ea',
        'primary-dark': '#1c1708'
      },
      fontFamily: {
        'head': ['Courgette'],
        'sub-head': ['Playpen Sans']
      }
    }
  },
  plugins: []
}
