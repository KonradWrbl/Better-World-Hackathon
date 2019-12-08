import React from 'react';
import bottles from '../../../assets/images/charity.svg'
import { CardContainer, StyledLeft, BuyButton } from './styles';
import bottle from "../../../assets/images/bottle.png";
import money from "../../../assets/images/money.png";
import {
  StyledWrapper,
  StyledTitle,
  ColumnsWrapper,
  Tile,
  StyledTileNum,
  StyledTileDesc,
  StyleLeft
} from "./styles";

const Card = ({count1, count2}) => {
    return (
        <StyledWrapper>
        <ColumnsWrapper>
        <Tile>
          <img src={bottles} alt="" />
          <StyleLeft>
            <StyledTileNum> {count1} l </StyledTileNum>
            <StyledTileDesc> of healty water</StyledTileDesc>
            <BuyButton>+</BuyButton>
          </StyleLeft>
        </Tile>
        <Tile>
          <img src={bottles} alt="" />
          <StyleLeft>
            <StyledTileNum> {count2} l </StyledTileNum>
            <StyledTileDesc>of healty water</StyledTileDesc>
            <BuyButton>+</BuyButton>
          </StyleLeft>
        </Tile>
      </ColumnsWrapper>
    </StyledWrapper>
    )
}

export default Card