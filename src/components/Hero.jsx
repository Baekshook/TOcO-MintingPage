import { Container, Stack, Text } from "@chakra-ui/react";
import { getNFTContract } from "@hooks/nftContract";
import { useEffect, useState } from "react";
import FlexComponent from "./FlexComponenet";
import HeadingComponent from "./HeadingComponent";
import Mint from "./Mint";

export default function Hero() {
  const myAddress = window.ethereum?.selectedAddress;

  const contract = getNFTContract();
  const [number, setNumber] = useState();

  useEffect(() => {
    contract.methods
      .totalSupply()
      .call()
      .then((a) => {
        setNumber(50 - a); // 50은 최대 발행량
      });
  }, []);

  if ({ number } <= 0) {
    alert("모든 물량이 소진되었습니다.");
    return;
  }

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <HeadingComponent />
        <FlexComponent />
        <Text
          fontWeight={100}
          fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          lineHeight={"140%"}
        >
          {number} / 50
          <br />
          0.01 ETH each
        </Text>
        <Text fontSize={"18px"} lineHeight={"50%"} margin={"100px"}>
          Your Address : {myAddress}
          <br />
          <br />
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Mint />
        </Stack>
        <Text
          lineHeight={"200%"}
          maxW={"3xl"}
          fontSize={"20px"}
          fontFamily={"PyeongChangPeace-Bold"}
        >
          max supply : 50
          <br />
          Connect to Ethereum Goerli Network
        </Text>
      </Stack>
    </Container>
  );
}
