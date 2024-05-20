/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        bg: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33.33%": {
            transform: "translate(40px, -50px) scale(1.1)",
          },
          "66.66%": {
            transform: "translate(20px, -30px) scale(1.2)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        navbarBar: {
          "0%": {
            height: "100%",
          },
          "33.33%": {
            height: "50%",
          },
          "50%": {
            height: "75%",
          },
          "60%": {
            height: "50%",
          },
          "100%": {
            height: "100%",
          },
        },
        transitionBg:{
          "0%": {
            background: "black",
            zIndex: 99999,
          },
          "50%": {
            background: "black",

          },
            "60%": {
                background: "transparent",

            },
          "100%": {
            background: "transparent",

          },
        },
        transitionBar:{
          "0%": {
            transform: "translateX(-100%)",
          },
          "50%": {
            transform: "translateX(0%)",
          },
          // "50%": {
          //   transform: "translateX(50%)",
          // },
          // "60%": {
          //   transform: "translateX(50%)",
          // },
          "100%": {
            transform: "translateX(100%)",

          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bg: "bg 7s infinite",
        navbarBar: "navbarBar 2s ease-in-out",
        transitionBg: "transitionBg 2s ease-in-out",
        barTransition: "transitionBar 2s ease-in-out"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
