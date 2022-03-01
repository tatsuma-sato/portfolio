module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        gold: "#C29F61",
        lightBlack: "#181818",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};