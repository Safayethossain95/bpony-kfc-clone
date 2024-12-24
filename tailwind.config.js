/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Center the container by default
        padding: {
          DEFAULT: '1rem', // Default padding for all screen sizes
          sm: '2rem', // Padding for small screens
          lg: '4rem', // Padding for large screens
          xl: '5rem', // Padding for extra-large screens
          '2xl': '6rem', // Padding for 2xl screens
        },
        screens: {
          sm: '100%', // Take full width for small screens
          md: '100%', // Take full width for medium screens
          lg: '1156px', // Fixed width for large screens
          xl: '1283px', // Fixed width for extra-large screens
        },
      },
    },
  },
  plugins: [],
}

