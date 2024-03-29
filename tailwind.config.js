/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [require("daisyui")], 
   daisyui: {
    themes: ["light", "dark"],
  },

  
}

