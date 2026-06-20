export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Arial Narrow", "Roboto Condensed", "Impact", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#0F172A",
        darkNavy: "#1E293B",
        teal: "#14B8A6",
        lightBg: "#F8FAFC",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15,23,42,0.18)",
      },
    },
  },
  plugins: [],
};
