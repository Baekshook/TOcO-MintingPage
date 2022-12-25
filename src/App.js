import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import Check from "@components/Check";
import theme from "./theme";
import "@fontsource/nanum-gothic";
import Fonts from "./font";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useAuth from "@hooks/useAuth";

const ethereum = window.ethereum;

function App() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    // 지갑 없을 시 이 effect 무효!
    if (!ethereum) {
      return;
    }

    const account = localStorage.getItem("_user");
    const currentMetamaskAccount = ethereum?.selectedAddress;

    if (!account || !currentMetamaskAccount) {
      setUser("");
      localStorage.removeItem("_user");
      return;
    }

    if (account === currentMetamaskAccount) {
      setUser(account);
      localStorage.setItem("_user", account);
    }
  }, [setUser]);

  useEffect(() => {
    if (!ethereum) {
      return;
    }

    const handleChangeAccounts = () => {
      if (!user) {
        return;
      }
      const changedAccount = ethereum?.selectedAddress;
      if (user !== changedAccount) {
        toast.success(
          `${changedAccount.slice(0, 5)}...   계정이 바뀌셨군요 ㅎㅎ!!`
        );
        setUser(changedAccount);
        localStorage.setItem("_user", changedAccount);
      }
    };

    ethereum.on("accountsChanged", handleChangeAccounts);
    return () => {
      ethereum.removeListener("accountsChanged", handleChangeAccounts); //klaytn이면 klaytn.off도 가능
    };
  }, [user, setUser]);

  useEffect(() => {
    if (!ethereum) {
      return;
    }

    const networkObj = {
      // 1001: "바오밥 테스트넷",
      // 8217: "메인넷",
      5: "테스트넷",
      1: "메인넷",
    };

    const handleNetworkChanged = async () => {
      const networkDecimal = await ethereum.request({ method: "net_version" });
      setUser("");
      localStorage.removeItem("_user");
      toast.warn(
        `네트워크가 ${networkObj[networkDecimal]}으로 바뀌었군요! 다시 로그인 해주세요~`
      );
    };

    ethereum?.on("chainChanged", handleNetworkChanged);
    return () => {
      ethereum?.removeListener("chainChanged", handleNetworkChanged);
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
      <Check></Check>
    </ChakraProvider>
  );
}

export default App;
