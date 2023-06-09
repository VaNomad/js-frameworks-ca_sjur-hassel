export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        // => @media (min-width: 320px) { ... }

        xs: "480px",
        // => @media (min-width: 480px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        exa: ['"Lexend Exa"', "sans-serif"],
        karla: ['"Karla"', "sans-serif"],
        syne: ['"Syne"', "sans-serif"],
      },
      backgroundImage: {
        'Four04': "url('/src/assets/catFour04.jpg')",
      }
    },
  },
  plugins: [],
};
