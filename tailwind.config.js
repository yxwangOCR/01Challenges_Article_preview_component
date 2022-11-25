/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Title: "hsl(217, 19%, 35%)",
      Text: "hsl(214, 17%, 51%)",
      Share: "hsl(212, 23%, 69%)",
      Body: "hsl(210, 46%, 95%)",
      White: "#fff",
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 350px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
