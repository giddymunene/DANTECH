module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}", // All JS, JSX, TS, TSX, HTML, and CSS files in the src directory
    "./public/index.html",                // Include your public HTML file(s)
    "./components/**/*.{js,jsx,ts,tsx}",  // If you have a components folder outside src
    "./pages/**/*.{js,jsx,ts,tsx}",       // If you use a pages directory (e.g., in Next.js)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
