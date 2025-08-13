// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all necessary files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Make sure DaisyUI is added here
};
