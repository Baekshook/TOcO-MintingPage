import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { FaDiscord, FaEthereum, FaGithub } from "react-icons/fa";
import opensea from "@assets/opensea.png";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const OpenSeaButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box bg={useColorModeValue("blackAlpha.300")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © TOcO NFT Minting Page
          <br />
          About Transparent Donation System
        </Text>
        <Stack direction={"row"} spacing={6} fontSize={"30px"}>
          <SocialButton label={"Github"}>
            <FaGithub
              onClick={() => window.open("https://github.com/De-X-V", "_blank")}
            />
          </SocialButton>
          <OpenSeaButton label={"Opensea"}>
            <Image
              src={opensea}
              onClick={() =>
                window.open(
                  "https://testnets.opensea.io/collection/toco-pass",
                  "_blank"
                )
              }
            />
          </OpenSeaButton>
          <SocialButton label={"Discord"}>
            <FaDiscord
              onClick={() =>
                window.open("https://discord.gg/u7msGZQdHt", "_blank")
              }
            />
          </SocialButton>
          <SocialButton label={"Etherscan"}>
            <FaEthereum
              onClick={() =>
                window.open(
                  "https://goerli.etherscan.io/address/0x913841837d9b77836947C7bC3F2b86215804fafB",
                  "_blank"
                )
              }
            />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
