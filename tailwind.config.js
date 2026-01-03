/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nebula: {
          deep: "#050208",
          glow: "#8b5cf6", // Electric Violet
          indigo: "#4f46e5",
        }
      },
    },
  },
  plugins: [],
}
