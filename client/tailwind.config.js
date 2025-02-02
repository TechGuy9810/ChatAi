/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        bot:{
          '0%':{
             transform:'scale(1) rotate(0)'
          },
          '100%':{
            transform:'scale(1.1) rotate(-5deg)'
          }
        },
        scrollloop:{
          from:{ transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"}
        }
      },
      animation: {
        bot: 'bot 3s ease-in-out infinite alternate',
        scrollloop:'scrollloop 50s linear infinite'
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}