module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        current: "var(--text-color)",
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var(--fill-color-indicator)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--fill-color)",
        },
      },
    },
  },
  plugins: [],
};
