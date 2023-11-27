/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        times: ["Times New Roman", "serif"],
      },
      animation: {
        bounce: "bounce 7s infinite",

        /* Tambahkan animasi kustom lainnya jika diperlukan */
      },
    },
  },
  plugins: [require("daisyui")],
};
