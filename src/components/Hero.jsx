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
  const myAddress = window.klaytn?.selectedAddress;

  const onClickMintButton = async () => {
    const accounts = await window.klaytn.enable();
    const account = accounts[0];
    console.log(window.klaytn.networkVersion);
    if (window.klaytn.networkVersion !== 1001) {
      // 8217 mainnet
      // 1001 testnet
      alert("Warning! It is not Baobab network");
      return;
    }

    const mintContract = "0x1b7967c073cc5d2b7b2a1728fbd737b567cd533f";

    const transactionParameters = {
      to: mintContract,
      from: account,
      data: "0xa0712d680000000000000000000000000000000000000000000000000000000000000001",
      value: "0xB1A2BC2EC50000", //0.05 klay 단위는 klay의 가장 작은 단위 peb, 1klay = 1,000,000,000,000,000,000 peb
      gas: "0x3476A", //무한 루프를 방지하기 위한 코드 실행의 최대 가스 허용량.
    };

    window.klaytn.sendAsync(
      {
        method: "klay_sendTransaction",
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
          fontWeight={100}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          lineHeight={"140%"}
        >
          1 / 50
          <br />
          50 klay each
        </Text>
        <Text fontSize={"18px"} lineHeight={"50%"} margin={"100px"}>
          Your Address : {myAddress}
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
          Connect to the Klaytn Mainnet
        </Text>
      </Stack>
    </Container>
  );
}
