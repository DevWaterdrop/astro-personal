/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      fontSize: {
        ["4.5xl"]: ["2.5rem", "1"],
      },
      colors: {
        blue: "#5fbff9",
        ["blue--dark"]: "#088cdd",
        black: "#252525",
        white: "#ffffff",
        footer: "#292f36",
        beige: "#f7f3f0",
      },
    },
  },
  plugins: [],
};
