import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import theme from "./theme";
import "@fontsource/nanum-gothic";
import Fonts from "./font";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
