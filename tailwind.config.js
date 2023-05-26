/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  module: {
    rules: [
      {
        
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        font: "#7f1d1d",
      },
    },
    
  },
  plugins: [],
};
