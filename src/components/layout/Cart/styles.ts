import styled, { css } from 'styled-components';

interface WrapperProps {
  backgroundColor2: string;
  isHiddenMenuVisible: boolean;
}

export const CartWrapper = styled.div<WrapperProps>`
  z-index: 9999;
  background-color: ${({ backgroundColor2 }) => backgroundColor2};

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
    bottom: 7px;
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
    bottom: 7px;
    top: auto;
    margin-bottom: env(safe-area-inset-bottom);
  }
`;
interface MenusProps {
  textcolor2: string;
}
export const CartMenu = styled.ul<MenusProps>`
  color: ${({ textcolor2 }) => textcolor2};
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
