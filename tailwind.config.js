/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#1FB2A6",

          neutral: "#191D24",

          // "base-100": "#2A303C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
