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
import GradientSectionTitle from "@components/GradientSectionTitle";

export default function CallToActionWithIllustration() {
  const myAddress = window.ethereum?.selectedAddress;

  const onClickMintButton = async () => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log(window.ethereum.networkVersion);
    if (window.ethereum.networkVersion !== "5") {
      // 8217 mainnet
      // 1001 testnet
      // 1 mainnet, 5 Goerli Test Network
      alert("Warning! It is not Goerli network");
      return;
    }

    const mintContract = "0x7f48395A6CFbA8285ABBdBe2fb7BEdB217654823";

    const transactionParameters = {
      to: mintContract,
      from: account,
      data: "0xa0712d680000000000000000000000000000000000000000000000000000000000000001",
      value: "23870000000000", // 23870000000000
      gas: "30000", //무한 루프를 방지하기 위한 코드 실행의 최대 가스 허용량.
    };

    window.ethereum.sendAsync(
      {
        method: "eth_sendTransaction",
        params: [transactionParameters],
        from: account,
      },
      (receipt, result) => {
        console.log(receipt);
        console.log(result);
      }
    );
  };

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
          <GradientSectionTitle />
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
          fontWeight={100}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          lineHeight={"140%"}
        >
          47 / 50
          <br />
          0.01 ETH each
        </Text>
        <Text fontSize={"18px"} lineHeight={"50%"} margin={"100px"}>
          Your Address : {myAddress}
          {/* Balance : {myBalbance} */}
          <br />
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            marginTop={"-20px"}
            rounded={"full"}
            px={8}
            py={8}
            bg={"red.400"}
            _hover={{ bg: "red.600" }}
            fontSize={{ base: "4xl", sm: "4xl", md: "4xl" }}
            fontFamily={"SEBANG_Gothic_Bold"}
            onClick={onClickMintButton}
          >
            MINT
          </Button>
        </Stack>
        <Text lineHeight={"200%"} maxW={"3xl"} fontSize={{ base: "2xl" }}>
          max supply : 50
          <br />
          Connect to the Ethereum Mainnet
        </Text>
      </Stack>
    </Container>
  );
}
