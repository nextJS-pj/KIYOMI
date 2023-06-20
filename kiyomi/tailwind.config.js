/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard-Regular", "sans-serif"],
      },

      screens: {
        mobile: "420px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },

      colors: {
        primary: "#1F2937",
        secondary: "#a1a1a1",
      },
    },
  },
  plugins: [],
};
