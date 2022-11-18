/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      animation: {
        dropTop: 'dropTop .3s linear',
      },

      keyframes: {
        dropTop: {
          '0%': { transform: 'translateY(-50%) scale(0)',
        opacity:'0' },
          '100%': { transform: 'translateY(0%) scale(1)',
        opacity:"1" },
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
