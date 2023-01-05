import React from 'react'
import {
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import cardImage from "@assets/card.png";

export default function FlexComponent() {
  return (
    <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
      <Image src={cardImage} h={"300px"} />
      <Box
        w={"400px"}
        h={"400px"}
        bg={"linear-gradient(160deg, #FF6666 0%, #00FF00 100%)"}
        pos={"absolute"}
        zIndex={-3}
        filter={"blur(70px)"}
      />
    </Flex>
  );
}
