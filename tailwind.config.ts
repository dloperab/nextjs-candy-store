import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsbold: ['Poppins Bold', 'sans-serif'],
      },
      colors: {
        custom: '#F4F1ED',
        'custom-purple': '#4B1A45',
        'custom-red-2': '#E94949',
        'custom-purple-lite': '#6B5569',
        'custom-pink': '#E75FAC',
        'custom-gray': '#D3CBD2',
        'custom-red': '#E93939',
        'custom-orange': '#FFA961',
      }
    },
  },
  plugins: [],
};
export default config;
