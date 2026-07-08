import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        family: {
          ink: "#101828",
          cream: "#FFF8EF",
          berry: "#C96B76",
          leaf: "#58745D",
          honey: "#D6A84F",
          cloud: "#F4EFE7"
        }
      }
    }
  },
  plugins: []
};

export default config;
