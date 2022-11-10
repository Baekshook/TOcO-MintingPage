import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

import cardImage from "@assets/card.png";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          fontFamily={"SEBANG_Gothic_Bold"}
        >
          T
          <Text as={"span"} color={"purple.400"}>
            O
          </Text>
          c
          <Text as={"span"} color={"purple.400"}>
            O{" "}
          </Text>
          <Text as={"span"} color={"pink.400"}>
            NFT
          </Text>
        </Heading>
        <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
          <Image src={cardImage} h={"300px"} />
          <Box
            w={"400px"}
            h={"400px"}
            bg={"linear-gradient(160deg, #21D4FD 0%, #B721FF 100%)"}
            pos={"absolute"}
            zIndex={-3}
            filter={"blur(70px)"}
          />
        </Flex>
        <Text
          fontWeight={400}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          lineHeight={"159%"}
          mt={"200px"}
        >
          1 / 50
          <br />
          50 klay each
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={8}
            py={8}
            bg={"red.400"}
            _hover={{ bg: "red.600" }}
            fontSize={{ base: "4xl", sm: "4xl", md: "4xl" }}
            fontFamily={"SEBANG_Gothic_Bold"}
          >
            MINT
          </Button>
        </Stack>
        <Text lineHeight={"200%"} maxW={"3xl"} fontSize={{ base: "2xl" }}>
          max supply : 50
          <br />
          Connect to the Klaytn Mainnet
        </Text>
      </Stack>
    </Container>
  );
}
