/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFFFF",
          300: "#F5F5F5",
          500: "#E1E6F0",
          700: "#878787",
          900: "#363636",
        },
        secondary: {
          100: "#EBF0F5",
          300: "#E1EBF5",
          500: "#D2E6FA",
          700: "#458CED",
          900: "#2D7DEB",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
