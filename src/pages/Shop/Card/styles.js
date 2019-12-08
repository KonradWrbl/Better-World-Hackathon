
import styled from "styled-components";

export const StyledTitle = styled.h2`
  margin-bottom: 12px;
`;

export const StyledWrapper = styled.div`
  margin-top: 20px;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

export const Tile = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #2256C914 0 3px 10px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
`;

export const StyledTileNum = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledTileDesc = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.xs};
`;

export const StyleLeft = styled.div`
  text-align: left;
  position: relative;
`;

export const BuyButton = styled.button`
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    right: -10px;
    bottom: -10px;
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    box-shadow: #2256C914 0 3px 10px;
    font-weight: ${({theme}) => theme.font.weight}
`