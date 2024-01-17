/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bright: "#ffde00",
        blueBright: "#3b4cca;",
      },
    },
  },
  plugins: [],
};
