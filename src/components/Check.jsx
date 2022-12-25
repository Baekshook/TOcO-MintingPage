import React from "react";
import nftContract from "../contracts/abi/nftContract.json";
import { nftContractAddress } from "../contracts/contract";
import { useState, useEffect } from "react";

import { getNFTContract } from "@hooks/nftContract";

export default function Check() {
  const contract = getNFTContract();

  const getNumber = contract.methods.totalSupply().call();
  console.log(getNumber);

  return <div>Check</div>;
}
