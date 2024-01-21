import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        future: "#23856D",
        grenn: "#2DC071",
        sky: "#23A6F0",
        mist: "#BDBDBD",
        "mist-dark": "#737373",
        misty: "#252B42",
      },
      // backgroundPosition: {

      // }
    },
  },
  plugins: [],
};
export default config;
