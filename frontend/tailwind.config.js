/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro", "cyberpunk", "valentine", "aqua", "black", {
      natural: {

        "primary": "#00a1ff",

        "secondary": "#00c900",

        "accent": "#00c300",

        "neutral": "#0e171f",

        "base-100": "#23232d",

        "info": "#00dfff",

        "success": "#00d56f",

        "warning": "#ff7e00",

        "error": "#ed001a",
      },
    }],
  },
}