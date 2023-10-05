const plugin = require("tailwindcss/plugin")

const rotateClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-axis-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".hide-back": {
      backfaceVisibility: "hidden",
    }
  })
});

const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans-serif": ["Inter", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      brightness: {
        25: '.25',
      }
    },
  },
  plugins: [require("daisyui"), rotateClass],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "black",
    themes: ["black"],
  },
};
