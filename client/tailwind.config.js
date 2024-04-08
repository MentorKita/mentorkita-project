/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1280px",
      },
      colors: {
        primary: "#01575C",
        secondary: "#E5EFEF",
        tertiary: "#6D8DFF",
      }
    },
  },
  plugins: [],
};
