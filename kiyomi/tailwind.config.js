/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard-Regular", "sans-serif"],
      },

      screens: {
        sm: "480px",
        md: "481px",
        lg: "1025px",
      },

      colors: {
        primary: "#1F2937",
        secondary: "#d4d4d4",
      },
    },
  },
  plugins: [],
};
