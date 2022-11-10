import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import theme from "./theme";
import "@fontsource/nanum-gothic";
import Fonts from "./font";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useAuth from "@hooks/useAuth";

const klaytn = window.klaytn;

function App() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    // 지갑 없을 시 이 effect 무효!
    if (!klaytn) {
      return;
    }

    const account = localStorage.getItem("_user");
    const currentKaikasAccount = klaytn?.selectedAddress;

    if (!account || !currentKaikasAccount) {
      setUser("");
      localStorage.removeItem("_user");
      return;
    }

    if (account === currentKaikasAccount) {
      setUser(account);
      localStorage.setItem("_user", account);
    }
  }, [setUser]);

  useEffect(() => {
    if (!klaytn) {
      return;
    }

    const handleChangeAccounts = () => {
      if (!user) {
        return;
      }
      const changedAccount = klaytn?.selectedAddress;
      if (user !== changedAccount) {
        toast.success(
          `${changedAccount.slice(0, 5)}...   계정이 바뀌셨군요 ㅎㅎ!!`
        );
        setUser(changedAccount);
        localStorage.setItem("_user", changedAccount);
      }
    };

    klaytn?.on("accountsChanged", handleChangeAccounts);
    return () => {
      klaytn.off("accountsChanged", handleChangeAccounts);
    };
  }, [user, setUser]);

  useEffect(() => {
    if (!klaytn) {
      return;
    }

    const networkObj = {
      1001: "바오밥 테스트넷",
      8217: "메인넷",
    };

    const handleNetworkChanged = () => {
      setUser("");
      localStorage.removeItem("_user");
      toast.warn(
        `네트워크가 ${
          networkObj[klaytn.networkVersion]
        }으로 바뀌었군요! 다시 로그인 해주세요~`
      );
    };

    klaytn?.on("networkChanged", handleNetworkChanged);
    return () => {
      klaytn?.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [setUser]);

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
