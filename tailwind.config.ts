/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 2s forwards",
        scale_card: "scale_card 2s forwards",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scale_card: {
          "0%": {
            transform: "translateY(-9vw) scale(1)",
          },
          "100%": {
            transform: "translateY(-12vw) scale(1.5)",
          },
        },
      },
    },
  },
  plugins: [],
};
