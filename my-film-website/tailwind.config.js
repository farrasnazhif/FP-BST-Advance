/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#64748b",
        brandYellow: "#FFC700",
        brandGray: "#E5E7EB",
        brandRed: "#F87171",
        brandBlue: "#60A5FA",
        brandBlack: "#1E293B",
        brandWhite: "#F9FAFB",
        brandDark: "#0f172a",
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

