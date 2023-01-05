module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#0FCFEC",
//           secondary: "#19D3AE",
//           accent: "#3A4256",
//           neutral: "#191d24",

//           // "base-100": "#2A303C",
//         },
//       },
//     ],
//   },
//   plugins: [require("daisyui")],
// };
