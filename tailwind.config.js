/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: '#1c3334', secondary: '#D1E8E2', highlight: '#DA7B93', card: '#2a4a4b', },
    },
  },
  variants: {},
  plugins: [],
}
