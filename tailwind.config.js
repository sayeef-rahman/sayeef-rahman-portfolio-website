/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#1fdf64",
        Black: "#000",
        DeepNightBlack: "#121212",
        MidNightBlack: "#181818",
        EveningBlack: "#1a1a1a",
        DarkGray: "#282828",
        SlateGray: "#404040",
        LightGray: "#959595",
        SilverGray: "#B3B3B3",
        Snow: "#ffffff",
      },

      fontFamily: {
        openSans: ["Open Sans"],
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 25%" },
          "25%": { "background-position": "25% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 30s ease infinite",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(65deg ,#8e44ad, #1abc9c, #ec7063, #3498db, #99a3a4)",
      },
    },
  },
};
