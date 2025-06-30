import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        green: {
          50: '#f0fcf9',
          100: '#c6f7e9',
          200: '#8eedd1',
          300: '#5fe3c0',
          400: '#2dcca7',
          500: '#17b897',
          600: '#079a82',
          700: '#048271',
          800: '#016457',
          900: '#004440',
        }
      },
    },
  },
  plugins: [],
};

export default config;