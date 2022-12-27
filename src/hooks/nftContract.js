import nftContract from "../contracts/abi/nftContract.json";
import { NftContractAddress } from "../contracts/TOcOcontracts";

const Web3 = require("web3");

const web3 = new Web3(window.ethereum);
export const getNFTContract = () => {
  const contract = new web3.eth.Contract(nftContract, NftContractAddress);

  return contract;
};
