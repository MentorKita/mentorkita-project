/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1280px",
      },
      colors: {
        primary: "#01575C",
        secondary: "#E5EFEF",
        tertiary: "#6D8DFF",
        textColor:"#575757",
      },
      boxShadow: {
        cardShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
