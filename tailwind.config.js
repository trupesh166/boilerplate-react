/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--clr-primary-rgb))", //text-primary
        secondary: "rgb(var(--clr-secondary-rgb))", //text-secondary
      },
      fontFamily: {
        primary: "var(--font-primary)", //font-primary
      },
      spacing: {
        '2xl': "var(--space-2xl)", //p-2xl
        xl: "var(--space-xl)",//p-xl
        lg: "var(--space-lg)",
        md: "var(--space-md)",
        sm: "var(--space-sm)",
        xs: "var(--space-xs)",
      },
      fontSize: {
        '5xl': "var(--text-5xl)", //text-5xl
        '4xl': "var(--text-4xl)", //text-4xl
        '3xl': "var(--text-3xl)",
        '2xl': "var(--text-2xl)",
        xl: "var(--text-xl)",
        lg: "var(--text-lg)",
        sm: "var(--text-sm)",
      },
      screens: {
        xs: '0px', // Extra small devices (portrait phones, less than 576px)
        sm: '576px', // Small devices (landscape phones, 576px and up)
        md: '768px', // Medium devices (tablets, 768px and up)
        lg: '992px', // Large devices (desktops, 992px and up)
        xl: '1200px', // Extra large devices (large desktops, 1200px and up)
        xxl: '1400px', // Extra extra large devices (larger desktops, 1400px and up)
      },
    },
  },
  plugins: [],
};
