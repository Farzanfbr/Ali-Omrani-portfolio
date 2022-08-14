const { rgba } = require("@react-spring/shared");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "0px 15px 0 0 rgb(255,255,255)",
        myShadow2: "0px -15px 0 0 rgb(255,255,255)",
        progbar: "inset 0px 1px 1px rgba(0, 0, 0, 0.05),0px 1px rgba(255, 255, 255, 0.8) ",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
