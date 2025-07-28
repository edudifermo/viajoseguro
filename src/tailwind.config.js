/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.js",
    "./components//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-mosaic.jpg')",
      },
      colors: {
        primary: '#2563eb', // Azul vibrante
        secondary: '#f97316', // Naranja suave
        accent: '#8b5cf6', // Púrpura
        background: '#f0f4f8', // Gris claro para fondos
        text: '#1f2937', // Gris oscuro para texto
      }
    },
  },
  plugins: [],
}