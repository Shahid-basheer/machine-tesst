/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        100: "100px",
        130: "130px",
        150: "150px",
        159: "159px",
        200: "200px",
        300: "300px",
        350: "350px",
        400: "400px",
        40: "40rem",
      },
      height: {
        46: "46rem",
        41: "41px",
        100: "100px",
        130: "130px",
        159: "159px",
        120: "120rem",
        122: "122px",
        126: "126px",
        200: "200px",
        300: "300px",
        350: "350px",
        400: "400px",
      },
      minWidth: {
        96: "96px",
      },
      maxWidth: {
        122: "122px",
      },
      padding: {
        6: "6px",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      fontSize: {
        12: "12px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
