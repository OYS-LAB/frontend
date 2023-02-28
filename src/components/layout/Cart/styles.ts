import styled, { css } from 'styled-components';

interface WrapperProps {
  reverseColor: string;
  isHiddenMenuVisible: boolean;
}

export const CartWrapper = styled.div<WrapperProps>`
  z-index: 9999;
  background-color: ${({ reverseColor }) => reverseColor};

  margin-top: 4px;
  width: 35%;
  height: 18px;
  display: flex;
  top: 72px;
  right: 0;
  position: fixed;

  @media (max-width: 1023px) {
    width: 87.5%;
    right: 6.2%;
    bottom: calc(env(safe-area-inset-bottom) + 15px);
    top: auto;
    justify-content: center;
    ${({ isHiddenMenuVisible }) =>
      isHiddenMenuVisible &&
      css`
        display: none;
      `}
  }
  @media (max-width: 600px) {
    width: 90%;
    right: 5%;
    top: auto;
  }
`;
interface MenusProps {
  baseColor: string;
}
export const CartMenu = styled.ul<MenusProps>`
  color: ${({ baseColor }) => baseColor};
  font-size: 12px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 500;
  li {
    &:nth-child(2) {
      margin: 0 42px;
    }
  }
`;
