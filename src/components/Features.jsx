import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { IoJournalSharp, IoLogoBitcoin, IoWalletSharp } from "react-icons/io5";
import securityImage from "@assets/security.png";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Flex
      justify={"center"}
      py={12}
      px={{ base: "20px", sm: "30px", lg: "50px" }}
      h={"100vh"}
      align={"center"}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems={"center"}
      >
        <Stack spacing={4}>
          <Text
            color={"purple.50"}
            fontWeight={600}
            fontSize={"sm"}
            bg={"purple.500"}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            비담과 함께라면
          </Text>
          <Heading>당신의 비밀을 간직할 수 있습니다.</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            어떤 비밀을 간직할 수 있는지 알아볼까요?
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoWalletSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={"purple.100"}
              text={
                "계좌 정보와 금융 정보를 비담에서 보관하고 관리할 수 있습니다."
              }
            />
            <Feature
              icon={
                <Icon as={IoLogoBitcoin} color={"purple.100"} w={5} h={5} />
              }
              iconBg={"purple.500"}
              text={"블록체인 토큰 또한 비담에서 종합 관리할 수 있습니다."}
            />
            <Feature
              icon={
                <Icon as={IoJournalSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={"purple.100"}
              text={
                "누구한테도 보여주고 싶지 않은 비밀 이야기, 비담에서 간직할 수 있습니다."
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={securityImage}
            objectFit={"cover"}
            maxH={"330px"}
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
