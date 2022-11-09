import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,

} from "@chakra-ui/icons";


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  

  return (
    <Box pos={"fixed"} top={0} w={"100%"} zIndex={999}>
      <Flex
        bg={"rgba(0,0,0,0.5)"}
        backdropFilter={"blur(7px) saturate(50%)"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"purple.500"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              bg: "purple.300",
            }}
          />
        </Flex>
        <Flex
          fontSize={40}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "center" })}
            fontFamily={"SEBANG_Gothic_Bold"}
          >
            T
            <Text as={"spam"} color={"purple.400"}>
              O
            </Text>
            c
            <Text as={"spam"} color={"purple.400"}>
              O{" "}
            </Text>
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            bg={"purple.400"}
            href={"#"}
            _hover={{
              bg: "purple.300",
            }}
          >
            Connect Wallet
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}
