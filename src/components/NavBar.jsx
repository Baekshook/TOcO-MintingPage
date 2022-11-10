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
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import useAuth from "@hooks/useAuth";
import { toast } from "react-toastify";
import Wallet from "@components/Wallet";

export default function WithSubNavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const klaytn = window.klaytn;

  const { user, setUser } = useAuth();
  async function loginWithKaikas() {
    if (!klaytn) {
      toast.error("kaikas 설치 해주세요!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      const accounts = await toast.promise(
        klaytn.enable(),
        {
          pending: "Kaikas 지갑 연동 중",
        },
        { closeButton: true }
      );
      setUser(accounts[0]);
      localStorage.setItem("_user", accounts[0]);
      toast.success(`${accounts[0].slice(0, 13)}...님 환영합니다~ ^^`);
    } catch {
      toast.error("로그인 실패..! 다시 시도해주세요~^^");
    }
  }

  function handleLogin() {
    loginWithKaikas();
  }

  async function handleDone() {
    const isAvailable = await isKaikasAvailable();
    if (isAvailable) {
      toast.success("엇 ..또 로그인 하실려구요?!");
      return;
    }

    toast.warn("다시 로그인 해주세요 ^^!");
    setUser("");
    localStorage.removeItem("_user");
  }

  async function isKaikasAvailable() {
    const klaytn = window?.klaytn;
    if (!klaytn) {
      return false;
    }

    const results = await Promise.all([
      klaytn._kaikas.isApproved(),
      klaytn._kaikas.isEnabled(),
      klaytn._kaikas.isUnlocked(),
    ]);

    return results.every((res) => res);
  }

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
            <Text as={"span"} color={"purple.400"}>
              O
            </Text>
            c
            <Text as={"span"} color={"purple.400"}>
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
              cursor: "pointer",
            }}
            onClick={user ? handleDone : handleLogin}
          >
            <Wallet />
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}
