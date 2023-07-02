export const globalStyles = {
  colors: {
    colorThemeName: {
      50: "#C8102E",
      100: "#ffffff",
    },
  },
  styles: {
    global: () => ({
      body: {
        overflowX: "hidden",
        // bg: "#111111",
        bg: "#1e1e2c",
        // bg: mode("darkMode.50", "darkMode.500")(props),
        letterSpacing: "-0.5px",
      },
    }),
  },
};
