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
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
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
        transitionBg: {
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
        transitionBar: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "50%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(100%)",

          },
        },
        nodeIcon: {
          "0%": {
            transform: "translate(0,0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(158px, -256px)",
            opacity: 1,
          },
        },
        goIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(206px, -176px)",
            opacity: 1,
          },
        },
        pythonIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(238px, -80px)",
            opacity: 1,
          },
        },
        dockerIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(270px, -240px)",
            opacity: 1,
          },
        },
        dotNetIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(315px, -135px)",
            opacity: 1,
          },
        },
        tailwindIcon: {
          "0%": {
            transform: "translate(0,0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(-365px, -135px)",
            opacity: 1,
          },
        },
        nextIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(-288px, -80px)",
            opacity: 1,
          },
        },
        astroIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(-256px, -176px)",
            opacity: 1,
          },
        },
        reactIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(-208px, -256px)",
            opacity: 1,
          },
        },
        jsIcon: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(-320px, -240px)",
            opacity: 1,
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bg: "bg 7s infinite",
        navbarBar: "navbarBar 2s ease-in-out",
        transitionBg: "transitionBg 2s ease-in-out",
        barTransition: "transitionBar 2s ease-in-out",
        tailwindIcon: "tailwindIcon 2.6s ease-in-out",
        nextIcon: "nextIcon 2.8s ease-in-out",
        astroIcon: "astroIcon 2.4s ease-in-out",
        reactIcon: "reactIcon 2s ease-in-out",
        jsIcon: "jsIcon 2.2s ease-in-out",
        nodeIcon: "nodeIcon 2.6s ease-in-out",
        goIcon: "goIcon 2.8s ease-in-out",
        pythonIcon: "pythonIcon 2.4s ease-in-out",
        dockerIcon: "dockerIcon 2.2s ease-in-out",
        dotNetIcon: "dotNetIcon 2.6s ease-in-out",
      },
      animationDelay: {
        '2': '2s',
        '3': '3s',
        '4': '4s',
        '5': '5s',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
