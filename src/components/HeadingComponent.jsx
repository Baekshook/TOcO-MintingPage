import React from "react";
import GradientSectionTitle from "@components/GradientSectionTitle";
import { Heading, Text } from "@chakra-ui/react";

export default function HeadingComponent() {
  return (
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
  );
}
