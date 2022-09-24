/** @type {import('tailwindcss').Config} */
const Nth = require("tailwind-nth-child");
const nth5 = new Nth("5", "-n+5"); // The first five child elements
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      spaceMono: ["Space Mono", "cursive"],
      ibmRegular: ["IBM Plex Mono", "serif"],
      ibmBold: ["IBM Plex Bold", "serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 20px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      cm: "810px",
      // => @media (min-width: 810px) { ... }

      bcm: "890px",
      // => @media (min-width: 890px) { ... }

      lg: "1054px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        link: "#6A91F4",
        linkHover: "#162ADE",
        cards: "#FCFCFD",
        heroBackground: "#FFFFFF",
        orangeColor: "#FEB273",
        defaultGray100: "#F2F2F2",
        extendedTrueGray500: "#737373",
        extendedTrueGray900: "#171717",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translate(-10px)" },
          "50%": { transform: "translate(20px)" },
        },
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translate(-10px)" },
          "50%": { transform: "translate(20px)" },
        },
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
    order: {
      two: "2",
    },
  },
  plugins: [nth5.nthChild()],
};
