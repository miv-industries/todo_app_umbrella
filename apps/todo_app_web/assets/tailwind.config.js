/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.jsx",
    "./js/**/*.tsx",
    "../lib/*_web.ex",
    "../lib/*_web/**/*.*ex",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
