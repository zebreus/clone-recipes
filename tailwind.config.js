module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    fontFamily: {
      sans: ["cantarell", "sans-serif"],
      serif: ["serif"],
    },
    spacing: {
      1: "8px",
      2: "8px",
      3: "8px",
      4: "8px",
      5: "8px",
      6: "8px",
      7: "8px",
      8: "8px",
      9: "8px",
      10: "8px",
      11: "8px",
      12: "8px",
      13: "8px",
      14: "8px",
      16: "8px",
      20: "8px",
      24: "8px",
    },
  },
  daisyui: {
    themes: [
      {
        "adwaita-dark": {
          "base-100": "#242424",
          "base-content": "#ffffff",
          "--btn-focus-scale": "1.00",
          "--border-btn": "0",

          "primary": "#303030",
          "secondary": "#3584e4",
          "accent": "#3584e4",
          "neutral": "#3e3e3e",

          "info": "#3a3a3a",
          "success": "#3584e4",
          "warning": "#e7715c",
          "error": "#c01c28",
          "toaster": "#ff0000",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem",
        },
        "adwaita-light": {
          "base-100": "#fafafa",
          "base-content": "#000000cc",
          "primary": "#303030",
          "secondary": "#3584e4",
          "accent": "#3584e4",
          "neutral": "#363636",

          "info": "#3a3a3a",
          "success": "#3584e4",
          "warning": "#e7715c",
          "error": "#c01c28",

          "--btn-focus-scale": "1.00",
          "--border-btn": "0",
        },
      },
      "cyberpunk",
      "cupcake",
    ],
  },
}
