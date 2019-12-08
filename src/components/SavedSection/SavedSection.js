import React from "react";
import bottle from "../../assets/images/bottle.png";
import money from "../../assets/images/money.png";
import {
  StyledWrapper,
  StyledTitle,
  ColumnsWrapper,
  Tile,
  StyledTileNum,
  StyledTileDesc,
  StyleLeft
} from "./styles";

const SavedSection = () => {
  return (
    <StyledWrapper>
      <StyledTitle> This week you saved </StyledTitle>
      <ColumnsWrapper>
        <Tile>
          <img src={bottle} alt="" />
          <StyleLeft>
            <StyledTileNum> 14 </StyledTileNum>
            <StyledTileDesc> plastic bottles</StyledTileDesc>
          </StyleLeft>
        </Tile>
        <Tile>
          <img src={money} alt="" />
          <StyleLeft>
            <StyledTileNum> 21 </StyledTileNum>
            <StyledTileDesc> pln</StyledTileDesc>
          </StyleLeft>
        </Tile>
      </ColumnsWrapper>
    </StyledWrapper>
  );
};

export default SavedSection;
