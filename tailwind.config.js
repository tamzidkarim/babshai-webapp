module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Merriweather", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-theme": "#ff5C5c",
        "dark-theme": "#470000",
        "regular-theme": "#ca1414",
        "extra-light": "#E5D3D3",
        "border-light": "#C4C2C1",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      backgroundImage: (theme) => ({
        "cloth-preview":
          "url('https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
