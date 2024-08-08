/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Atur path untuk file HTML dan TypeScript Anda
  ],
  theme: {
    extend: {
      colors: {
        netflix: "#e50914", // Tambahkan warna kustom di sini
      },
    },
  },
  plugins: [require("daisyui")],
};
