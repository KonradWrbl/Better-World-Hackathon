import styled from "styled-components";

export const MapWrapper = styled.div`
  position: absolute;
  top: -48px;

  iframe {
    border: 0;
  }

  /* &::after {
    content: "";
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(transparent, ${theme.colors.lightGrey} 100%)`};
  } */
`;
