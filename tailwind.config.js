/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container

        padding: {
          DEFAULT: "1rem", // Default padding for the container
          sm: "2rem", // Padding for small screens
          md: "3rem", // Padding for medium screens
          lg: "4rem", // Padding for large screens
          xl: "5rem", // Padding for extra large screens
        },
      },
      colors: {
        primary: "#FEC544",
        secondary: "#1B3340",
        "primary-light": "#77797E",
        "primary-dark-100": "#0a101e",
      },
    },
  },
  plugins: [],
};
