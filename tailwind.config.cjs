/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: '#5fbff9',
        black: '#252525',
        white: '#ffffff',
        footer: '#292f36',
      },
    },
  },
  plugins: [],
};
