import React from "react";
import { StyledWrapper, StyledTitle, ContentWrapper } from "./styles";
import Element from "../Element/Element";

const elems = [
  {
    symbol: "Mg",
    name: "magnessium"
  },
  {
    symbol: "Ca",
    name: "magnessium"
  },
  {
    symbol: "K",
    name: "magnessium"
  },
  {
    symbol: "Se",
    name: "magnessium"
  }
];

const AdditionsSection = () => {
  return (
    <div>
      <StyledWrapper>
        <StyledTitle> This week you saved </StyledTitle>
        <ContentWrapper>
          {elems.map(item => (
            <Element key={item.symbol} element={item.symbol} />
          ))}
        </ContentWrapper>
      </StyledWrapper>
    </div>
  );
};

export default AdditionsSection;
