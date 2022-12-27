import { Container, Stack, Text, Button } from "@chakra-ui/react";
import { getNFTContract } from "@hooks/nftContract";
import { useEffect, useState } from "react";
import FlexComponenet from "./FlexComponenet";
import HeadingComponent from "./HeadingComponent";

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

    const mintContract = "0xa83A1472f66E3F53738f060221Ba782A8cED7D45";

    try {
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

      if (transactionParameters != null) {
        console.log(transactionParameters);
        alert("민팅 성공!");
      }
    } catch (error) {
      console.log(error);
      alert("민팅 실패");
    }
  };

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

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <HeadingComponent />
        <FlexComponenet />
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
