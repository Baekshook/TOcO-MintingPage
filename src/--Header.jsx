import styled from "styled-components";
import SearchIcon from "@components/atoms/SearchIcon";
import Logo from "@components/atoms/Logo";
import HamburgerIcon from "@components/atoms/HamburgerIcon";
import * as colors from "@styles/colors";
import Wallet from "@components/atoms/Wallet";
import kaikasImageUrl from "@assets/image/kaikas.png";
import { toast } from "react-toastify";
import useAuth from "@hooks/useAuth";

const Container = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${colors.bgBlack};
  position: fixed;
  top: 0px;
  display: flex;
  padding: 0px 16px;
  align-items: center;
  z-index: 999;
`;

const LogoWrapper = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  border-left-width: 1px;
  border-color: hsla(0, 0%, 100%, 0.12);
  border-style: solid;
`;

const GrayRoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.bgSecondary};
`;

const WalletBox = styled(GrayRoundBox)`
  background-color: ${colors.textYellow};
  margin-right: 8px;
  cursor: pointer;
`;

const SearchIconWrapper = styled.div`
  margin-left: 16px;
`;

const KaikasImage = styled.img`
  width: 20px;
  height: 20px;
`;

const klaytn = window.klaytn;

function Header() {
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
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchBarWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBarWrapper>
      <WalletBox onClick={user ? handleDone : handleLogin}>
        {user ? <KaikasImage src={kaikasImageUrl} /> : <Wallet />}
      </WalletBox>
      <GrayRoundBox>
        <HamburgerIcon />
      </GrayRoundBox>
    </Container>
  );
}

export default Header;
