import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";

import keyImage from "@assets/key.png";
import diaryImage from "@assets/diary.png";
import nftImage from "@assets/nft.png";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={"center"}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" fontFamily={"SEBANG_Gothic_Bold"}>
          당신만의 비밀 NFT를 만들고 보관하세요
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          당신의 NFT를 보유한 사람만 비밀을 알 수 있습니다.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={10}
        py={10}
      >
        <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 240 }}>
            <Box py={4} px={12} fontFamily={"SEBANG_Gothic_Bold"}>
              <Text fontWeight="500" fontSize="2xl">
                기본
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  eth
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  1
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <Image src={nftImage} w={100} />
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="purple" variant={"outline"}>
                  민팅 하러가기
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 280 }}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={"purple.600"}
                fontFamily={"SEBANG_Gothic_Bold"}
                px={3}
                py={1}
                color={"white"}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                가장 인기있는
              </Text>
            </Box>
            <Box py={4} px={12} fontFamily={"SEBANG_Gothic_Bold"}>
              <Text fontWeight="500" fontSize="2xl">
                프리미엄
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  eth
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  2
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <Image src={keyImage} w={132} />
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="purple">
                  민팅 하러가기
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box position="relative" w={{ base: "520px", md: 240 }}>
            <Box py={4} px={12} fontFamily={"SEBANG_Gothic_Bold"}>
              <Text fontWeight="500" fontSize="2xl">
                울트라
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  eth
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  3
                </Text>
              </HStack>
            </Box>
            <VStack py={4} borderBottomRadius={"xl"}>
              <Image src={diaryImage} w={100} />
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="purple" variant={"outline"}>
                  민팅 하러가기
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
