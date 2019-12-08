import styled from "styled-components";

export const MapWrapper = styled.div`
  position: absolute;
  top: -51px;
  width: 100%;
  height: 100vh;

  iframe {
    border: 0;
    width: 100%;
    height: 100vh;
  }

  &::after {
    content: "";
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(transparent, ${theme.colors.lightGrey} 88%)`};
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
  outline: none;
`;
