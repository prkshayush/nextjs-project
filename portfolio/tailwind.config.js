/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl' : '0 0 10px rgba(248, 232, 232, 0.833)',
        '3xl': '0 0 25px rgba(166, 158, 158, 0.1)',
        '4xl': '0 0 25px rgba(208, 196, 196, 0.751)'
      },
      colors: {
        'light': '#D0DDDD',
        'dark': '#111',
        'light-blue': '#1B98F5'
      }
    },
    screens:{
      "3xl": "1536px",
      "2xl": {max:"1535px"},

      "xl": { max: "1279px"},

      "lg": { max: "1023px"},
      "md": { max: "767px"},
      "sm": {max: "639px"},
      "xs": {max:"479px"}
    }
  },
  plugins: [],
}

