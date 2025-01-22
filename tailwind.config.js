/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: {
          DEFAULT: "#10b981",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        black: "var(--clr-black)",
        dark: "var(--clr-dark)",
        success: "var(--clr-success)",
        warning: "var(--clr-warning)",
        danger: "var(--clr-danger)",
        link: "var(--clr-Link)",
        silver: "var(--clr-silver)",
        pearl: "var(--clr-pearl)",
      },
      fontFamily: {
        sans: "var(--font-primary)",
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      spacing: {
        "2xl": "var(--space-2xl)",
        xl: "var(--space-xl)",
        lg: "var(--space-lg)",
        md: "var(--space-md)",
        sm: "var(--space-sm)",
        xs: "var(--space-xs)",
      },
      fontSize: {
        "5xl": "var(--text-5xl)",
        "4xl": "var(--text-4xl)",
        "3xl": "var(--text-3xl)",
        "2xl": "var(--text-2xl)",
        xl: "var(--text-xl)",
        lg: "var(--text-lg)",
        sm: "var(--text-sm)",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
