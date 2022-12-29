import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-t, #fad0c4 0%, #ffd1ff 100%)",
        color: "black",
      },
    },
  },
  fonts: {
    // body: `"KoHo", sans-serif;`,
    // heading: `"KoHo", sans-serif;`
    body: `font-family: "Nanum Gothic", sans-serif;`,
    heading: `font-family: "Nanum Gothic", sans-serif;`,
  },
});

export default theme;
