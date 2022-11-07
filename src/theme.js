import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "white",
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
