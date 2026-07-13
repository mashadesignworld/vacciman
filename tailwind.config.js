/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Scans the root app directory directly
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans the root components directory directly
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",   // In case you use a separate sections folder
  ],
  theme: {
    extend: {
      colors: {
        vacciman: {
          blue: "#0b468c",
          blueDark: "#073266",
          green: "#8cc63f",
          greenLight: "#a3d959",
          slate: "#0f172a",
          bgLight: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};