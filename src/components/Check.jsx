import React from "react";
import { useState, useEffect } from "react";
import { getNFTContract } from "@hooks/nftContract";

export default function Check() {
  const contract = getNFTContract();
  const [number, setNumber] = useState();

  useEffect(() => {
    contract.methods.totalSupply().call().then((a) => {
      setNumber(50-a); // 50은 최대 발행량
    })
  }, []);

  return <div>{number}</div>;
}
