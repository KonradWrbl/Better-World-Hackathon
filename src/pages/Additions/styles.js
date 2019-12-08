import styled from "styled-components";

export const AdditionsWrapper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100%;

  h2 {
    margin: 0;
    padding-top: 30px;
    font-size: ${({ theme }) => theme.font.m};
  }

  p {
    margin: 0;
    padding: 25px 0;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }

  hr {
    opacity: 0.16;
  }
`;
