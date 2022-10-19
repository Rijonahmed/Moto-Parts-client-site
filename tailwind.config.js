module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#FF5722",
        "secondary": "#E2D7EB"
      }
    },
  },
  plugins: [require("daisyui")],
}
