/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cold-grey-white": "#fff",
        black: "#000",
        "cold-grey-30": "#b1b5bb",
        "cold-grey-10": "#e5e7eb",
        gray: "#09011a",
        blue: "#651dfe",
        "yellow-50": "#fee101",
        midnightblue: "#1c054e",
        gainsboro: {
          "100": "#d1e7e5",
          "200": "#d9d9d9",
        },
        darkslategray: "#333",
        color: "#532fa0",
        blueviolet: "rgba(175, 74, 255, 0.3)",
        thistle: "#e3d5ff",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        h1: "'Noto Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "381xl": "400px",
        xl: "20px",
        corner: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      xs: "12px",
      base: "16px",
      "17xl": "36px",
      "8xl": "27px",
      mini: "15px",
      "5xl": "24px",
      "29xl": "48px",
      "13xl": "32px",
      xl: "20px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
