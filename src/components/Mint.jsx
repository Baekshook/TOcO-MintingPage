import React from "react";
import { useState } from "react";
import { Button, Container, Text } from "@chakra-ui/react";
import { getNFTContract } from "@hooks/nftContract";

export default function Mint() {
  const [counter, setCounter] = useState(0);

  function plus() {
    setCounter(counter >= 5 ? 5 : counter + 1);
    if (counter > 4) {
      alert("민팅은 최대 5개까지 가능합니다.");
      return;
    }
  }

  function minus() {
    setCounter(counter <= 0 ? 0 : counter - 1);
    if (counter < 1) {
      alert("민팅은 1개 이상만 가능합니다.");
      return;
    }
  }

  function handleReset() {
    setCounter(0);
  }

  const onClickMintButton = async () => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const contract = getNFTContract();
    if (window.ethereum.networkVersion !== "5") {
      // 8217 mainnet, 1001 testnet Klaytn
      // 1 mainnet, 5 Goerli Test Network
      alert("경고! 현재 네트워크가 Goerli network가 아닙니다.");
      return;
    }

    const mintContract = "0x913841837d9b77836947C7bC3F2b86215804fafB";
    const value = 10000000000000000 * counter;
    const gas = 200000 * counter;

    contract.methods
      .mint(counter)
      .send({
        to: mintContract,
        from: account,
        data: "0xa0712d680000000000000000000000000000000000000000000000000000000000000001",
        value: value,
        gas: gas, //무한 루프를 방지하기 위한 코드 실행의 최대 가스 허용량.
        gasPrice: "5000000000",
      })
      .once("error", (err) => {
        console.log(err);
        alert("민팅에 실패하였습니다.");
      })
      .then((receipt) => {
        console.log(receipt);
        alert(`민팅에 성공하였습니다!`);
      });
  };

  return (
    <Container maxW={"5xl"}>
      <Button
        onClick={plus}
        fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
        fontFamily={"SEBANG_Gothic_Bold"}
        bg={"red.400"}
        _hover={{ bg: "red.600" }}
      >
        +
      </Button>
      <Button
        ml={"10px"}
        mr={"10px"}
        onClick={minus}
        fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
        fontFamily={"SEBANG_Gothic_Bold"}
        bg={"red.400"}
        _hover={{ bg: "red.600" }}
      >
        -
      </Button>
      <Button
        onClick={handleReset}
        rounded={"full"}
        fontFamily={"PyeongChangPeace-Bold"}
      >
        초기화
      </Button>
      <Text
        mt={"10px"}
        fontSize={{ base: "20px" }}
        fontFamily={"PyeongChangPeace-Bold"}
      >
        민팅 개수 : {counter} (최대 5개)
      </Text>
      <br />
      <Button
        marginTop={"0px"}
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
    </Container>
  );
}
