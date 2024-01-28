/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bright: "#ffde00",
        blueBright: "#3b4cca;",
        darkBlue: "#0A285F",
        red: "#FB1B1B",
        gradient: "",
      },
    },
  },
  plugins: [],
};
