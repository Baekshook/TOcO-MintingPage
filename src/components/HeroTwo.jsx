import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Flex h={"100vh"} justify={"center"} align={"center"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            비밀을 담아주세요 <br />
            <Text as={"span"} color={"purple.400"}>
              오직 당신만의
            </Text>
          </Heading>
          <Text maxW={"3xl"}>
            항상 마음속으로만 간직한 이야기하지만 기억하고 싶었던 이야기 누군가
            볼까 두려웠던 속마음의 이야기 이제는 비담에 담아주시면 됩니다. 어느
            누구도 볼 수 없습니다. 오로지 당신만 볼 수 있습니다.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"purple"}
              rounded={"full"}
              px={6}
            >
              비담 시작하기
            </Button>
            <Button variant={"link"} colorScheme={"purple"} size={"sm"}>
              비담 알아보기
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
