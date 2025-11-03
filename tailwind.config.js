/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // 👈 Enables Tailwind inside React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
