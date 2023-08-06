/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        font: "#7f1d1d",
      },
      spacing: {
        112: "28rem",
        128: "32rem", // For example, '128' represents 32rem
        160: "40rem", // For example, '160' represents 40rem
      },
      screens: {
        2560: "2560px", // Custom breakpoint for 2560x1600 screens
      },
    },
  },
  plugins: [],
};
