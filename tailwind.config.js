module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  themes: [
    {
      mytheme: {
        "primary": "#303030",
        "secondary": "#3584e4",
        "accent": "#3584e4",
        "neutral": "#363636",
        "base-100": "#242424",
        "info": "#3a3a3a",
        "success": "#3584e4",
        "warning": "#e7715c",
        "error": "#c01c28",
      },
    },
    "dark",
    "light",
  ],
}
