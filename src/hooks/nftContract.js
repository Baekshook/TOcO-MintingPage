import nftContract from "../contracts/abi/nftContract.json"
import { NftContractAddress } from "../contracts/TOcOcontracts"

const Web3 = require("web3");

const web3 = new Web3(
  "https://goerli.infura.io/v3/7a486b2d6cd04800b54fbcbeed58bd8a"
);
export const getNFTContract = () => {
  const contract = new web3.eth.Contract(nftContract, NftContractAddress);

  return contract;
};
