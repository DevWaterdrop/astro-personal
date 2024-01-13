/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        footer: "#1c1917",
        beige: "#f7f3f0",
      },
    },
  },
  plugins: [],
};
