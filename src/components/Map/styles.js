import styled from "styled-components";

export const MapWrapper = styled.div`
  position: absolute;
  top: -51px;

  iframe {
    border: 0;
  }

  &::after {
    content: "";
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(transparent, ${theme.colors.lightGrey} 100%)`};
  }
`;

export const BackButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  bottom: 0;
  padding: 25px;
  text-align: center;
  border: none;
  background: none;
  display: block;
  width: 100%;
  z-index: 9;
`;
