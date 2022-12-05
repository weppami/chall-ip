/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        patt: "url('./dist/assets/pattern-bg.png')",
      }),
    },
  },
  plugins: [],
}
