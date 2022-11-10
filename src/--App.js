import GlobalStyle from "./GlobalStyle";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/templates/OpenseaTopCollections";
import OnBoarding from "@components/templates/OnBoarding";
import Footer from "@components/templates/Footer";
import useAuth from "@hooks/useAuth";
import { toast } from "react-toastify";
import { useEffect } from "react";

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
    <>
      <GlobalStyle />
      <Header>헤더부분</Header>
      <TopBanner>탑 배너</TopBanner>
      <Events />
      <ItemsOnSale>판매중인 아이템</ItemsOnSale>
      <OpenseaTopCollections>많이 거래된 컬렉션</OpenseaTopCollections>
      <OnBoarding>온보딩</OnBoarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
