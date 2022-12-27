import React from "react";
import { useState, useEffect } from "react";
import { Button, Container } from "@chakra-ui/react";
import { getNFTContract } from "@hooks/nftContract";

export default function Mint() {
  const [counter, setCounter] = useState(0);

  function plus() {
    setCounter(counter + 1);
    if (counter > 4) {
      alert("민팅은 최대 5개까지 가능합니다.");
      return;
    }
  }

  function minus() {
    setCounter(counter - 1);
    if (counter < 1) {
      alert("민팅은 1개 이상만 가능합니다.");
      return;
    }
  }

  function handleReset() {
    setCounter("0");
  }

  const onClickMintButton = async () => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const contract = getNFTContract();
    console.log(window.ethereum.networkVersion);
    if (window.ethereum.networkVersion !== "5") {
      // 8217 mainnet
      // 1001 testnet
      // 1 mainnet, 5 Goerli Test Network
      alert("Warning! It is not Goerli network");
      return;
    }
    console.log(contract);
    console.log(account);

    const mintContract = "0xa83A1472f66E3F53738f060221Ba782A8cED7D45";
    const value = 10000000000000000 * counter;

    contract.methods
      .mint(counter)
      .send({
        to: mintContract,
        from: account,
        data: "0xa0712d680000000000000000000000000000000000000000000000000000000000000001",
        value: value, // 23870000000000
        gas: "6500000", //무한 루프를 방지하기 위한 코드 실행의 최대 가스 허용량.
      })
      .then(console.log);
  };

  return (
    <Container maxW={"5xl"}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Button onClick={handleReset} rounded={"full"}>
          초기화
        </Button>
        <Button
          onClick={plus}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
        >
          +
        </Button>
        <Button
          onClick={minus}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
        >
          -
        </Button>
        <h1>count : {counter}</h1>
        <br />
        <Button
          marginTop={"10px"}
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
      </form>
    </Container>
  );
}
