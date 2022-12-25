import React from 'react'
import {
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import cardImage from "@assets/card.png";

export default function FlexComponenet() {
  return (
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
  );
}
