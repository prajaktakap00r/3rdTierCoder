/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      edu: ["Edu AU VIC WA NT Hand", "cursive"],
      raleway: ["Raleway", "sans-serif"],
      titillium: ['"Titillium Web"', "sans-serif"],
      unna: ['"Unna"', "serif"],
      montserrat: ['"Montserrat"', "sans-serif"],
    },
  },
  plugins: [],
};
