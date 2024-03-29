import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        zero: "0px",
        "2xs": "220px",
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1281px",
        "3xl": "1500px",
      },
    },
    screens: {
      zero: "0px",
      "2xs": "220px",
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1281px",
      "3xl": "1500px",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        luxury: {
          ...require("daisyui/src/theming/themes")["luxury"],
          "base-grey": "blue",
        },
      },

      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "black",
          "primary-focus": "mediumblue",
          secondary: "white",
          tretiary: "#f5f5f527",
          accent: "#ef4c53",
          announcement: "#1e293b",
          "base-grey": "#ffffff",
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "white",
          "primary-focus": "mediumblue",
          secondary: "black",
          tretiary: "#f5f5f5",
          accent: "#ef4c53",
          announcement: "#1e293b",
        },
      },
    ],
  },

  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require("daisyui/src/theming/themes")["[data-theme=light]"],
  //         primary: "white",
  //         "primary-focus": "mediumblue",
  //         secondary: "black",
  //         tretiary: "#f5f5f5",
  //         accent: "#ef4c53",
  //         announcement: "#1e293b",
  //       },
  //     },
  //     {
  //       dark: {
  //         ...require("daisyui/src/theming/themes")["[data-theme=light]"],
  //         primary: "black",
  //         "primary-focus": "mediumblue",
  //         secondary: "white",
  //         tretiary: "#f5f5f527",
  //         accent: "#ef4c53",
  //         announcement: "#1e293b",
  //       },
  //     },
  //   ],
  // },
} satisfies Config;

export default config;
