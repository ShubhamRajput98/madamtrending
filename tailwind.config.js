/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nato: ["Noto Serif Japanese"],
        montserrat: ["Montserrat"],
        cormorant: ["Cormorant Infant"],
        prata: ["Prata"],
        lato: ["Lato"]
      },
      colors: {
        // text colors
        blue: "#001963",
        white: "#FFF",
        red: "#FF3333",
        broun: "#8D4E38",
        overlay: "rgba(0, 0, 0, 0.40)",
        lightGray: "#808080",
        midGray: "#E9E9EB",
        lightPink: "rgba(255, 255, 255, 0.39)",
        lightBlue: "#001963",
        thinGray: "#F6F6F6"
      },
    },
  },
  plugins: [],
}
