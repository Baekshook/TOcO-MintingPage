import React from "react";
import styled, { keyframes } from "styled-components";

const textGradient = `linear-gradient(
    90deg,
    #e16838,
    #c58ccb 25.52%,
    #b546e1 50%,
    #9bbbbb 76.04%,
    #e16838
  );`;

const shine = keyframes`
  from {
    background-position: 0%;
   
  }
  to {
    background-position: 200%;
  
  }
`;

const GradientSectionTitles = styled.span`
  font-size: "3xl";
  font-weight: 700;
  background: ${textGradient};
  background-clip: text;
  background-size: 200% auto;
  background-position: 200%;
  animation: ${shine} 4s linear infinite;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export default function GradientSectionTitle() {
  return <GradientSectionTitles>NFT</GradientSectionTitles>;
}
