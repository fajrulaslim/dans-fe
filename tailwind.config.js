/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito',serif",
        ubuntu: "'Ubuntu',serif",
      },
      dropShadow: {
        soft: "0px 4px 8px rgba(0, 0, 0, 0.05)",
        medium: "0px 4px 16px rgba(0, 0, 0, 0.16)",
        hard: "0px 4px 24px rgba(0, 0, 0, 0.24)",
      },
      boxShadow: {
        soft: "0px 4px 8px rgba(0, 0, 0, 0.05)",
        medium: "0px 4px 16px rgba(0, 0, 0, 0.16)",
        hard: "0px 4px 24px rgba(0, 0, 0, 0.24)",
        sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        base: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25);",
      },
    },
    colors: {
      white: "#FDFDFE",
      neutral: {
        50: "#EAECEE",
        100: "#D4D7DB",
        200: "#AAAFB7",
        300: "#7F8894",
        400: "#556070",
        500: "#2A384C",
        600: "#202A39",
        700: "#151C26",
        800: "#0B0E13",
        900: "#040608",
      },
      slate: {
        50: "#FDFDFE",
        100: "#F9FBFD",
        200: "#F3F6FA",
        300: "#EDF2F8",
        400: "#E7EDF5",
        500: "#E1E9F3",
        600: "#A9AFB6",
        700: "#71757A",
        800: "#383A3D",
        900: "#171718",
      },
      yellow: {
        50: "#FFF9ED",
        100: "#FFF2DA",
        200: "#FEE5B5",
        300: "#FED991",
        400: "#FDCC6C",
        500: "#FDBF47",
        600: "#BE8F35",
        700: "#7F6024",
        800: "#3F3012",
        900: "#191307",
      },
      blue: {
        50: "#ECF2F7",
        100: "#D7E5EE",
        200: "#B0CBDD",
        300: "#88B0CD",
        400: "#6196BC",
        500: "#397CAB",
        600: "#2B5D80",
        700: "#1D3E56",
        800: "#0E1F2B",
        900: "#060C11",
      },
      orange: {
        50: "#FFF5E6",
        100: "#FFEBCC",
        200: "#FFD699",
        300: "#FFC266",
        400: "#FFAD33",
        500: "#FF9900",
        600: "#BF7300",
        700: "#804D00",
        800: "#402600",
        900: "#1A0F00",
      },
      green: {
        50: "#E9F8F3",
        100: "#D1EFE6",
        200: "#A4E0CE",
        300: "#76D0B5",
        400: "#49C19D",
        500: "#1BB184",
        600: "#148563",
        700: "#0E5942",
        800: "#072C21",
        900: "#03120D",
      },
      red: {
        50: "#FCEBED",
        100: "#F8D7DA",
        200: "#F1AEB5",
        300: "#EA868F",
        400: "#E35D6A",
        500: "#DC3545",
        600: "#A52834",
        700: "#6E1B23",
        800: "#370D11",
        900: "#160507",
      },
      "ds-purple": {
        500: "#AB85B2",
      },
      "ds-blue": {
        500: "#909DBB",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};