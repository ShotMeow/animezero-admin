/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      colors: {
        purple: "#643FFE",
        filter: {
          "blur-20": "blur(20px)",
          "blur-25": "blur(25px)",
        },
      },
      boxShadow: {
        autofill: "inset 0 0 0px 1000px #09090B",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pop-blob": "pop-blob 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-text-fill")],
};
