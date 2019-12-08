import styled from "styled-components";

export const IconsContainer = styled.span`
  padding: 10px;
  display: inline-block;
  transform: ${({ active }) => (active ? "scale(1.5)" : "scale(1)")};
  transition: transfrom 0.25s ease-in-out;
`;

// export const FABOttomMenuIcon = styled(FontAwesomeIcon)`
//     font-size: 20px;
// `
