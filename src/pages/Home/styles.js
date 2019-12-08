import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 9;
  background: ${({ theme }) =>
    `linear-gradient(transparent , ${theme.colors.lightGrey}, ${theme.colors.lightGrey}, ${theme.colors.lightGrey})`};
  min-height: calc(100vh - 48px);
  padding: 0 20px;
  transform: ${({ slided }) => (slided ? "translateY(100%)" : "translateY(0)")};
  transition: transform 0.25s ease-in-out;
`;

export const SlideButton = styled.button`
  padding: 25px;
  text-align: center;
  border: none;
  background: none;
  display: block;
  width: 100%;
`;

export const DropWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
  position: relative;

  /*   */
`;

export const AddButton = styled.button`
  border: none;
  background: #fff;
  width: 45px;
  height: 45px;
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%);
  box-shadow: 0 3px 15px ${({ theme }) => theme.colors.shadow};
  outline: none;
`;

export const DropText = styled.div`
  color: #fff;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const DropNum = styled.div`
  font-size: 41px;
`;

export const DropUnit = styled.div`
  font-size: ${({ theme }) => theme.font.s};
  text-transform: uppercase;
  letter-spacing: 6px;
`;

export const StyledWrapper = styled.div`
  height: calc(100% - 48px);
  overflow-y: hidden;
`;
