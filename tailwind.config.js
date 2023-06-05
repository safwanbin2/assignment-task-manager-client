/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#FFE071",
          "secondary": "#171F26",
          "base-100": "#0C151D",
          "accent": "#1d2938"
        }
      },
      "retro", "corporate"
    ]
  }
}

