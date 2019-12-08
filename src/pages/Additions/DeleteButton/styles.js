import styled from "styled-components";

export const DeleteButtonContainer = styled.div`
  height: 60px;
  width: 60px;
  background-color: #515151;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 10px;

  & > div:first-child {
    font-size: 18px;
    width: 100%;
    text-align: center;
  }

  /* svg, {
        fill: #fff;
    } */
`;
