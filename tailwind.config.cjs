/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        presstart: ['"Press Start 2P"', "cursive"],
        inconsolata: ["Inconsolata", "cursive"],
      },
    },

    colors: {
      mirage: "#0d1b2a",
      dark: "#1b263b",
      pearlBush: "#e0e1dd",
    },
  },
  plugins: [],
};
