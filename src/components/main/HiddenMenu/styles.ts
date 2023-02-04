import Link from 'next/link';
import styled from 'styled-components';
interface MenusProps {
  isHiddenMenuVisible: boolean;
}
interface Props {
  textColor: string;
}

export const HiddenMenu = styled.ul<MenusProps>`
  display: ${({ isHiddenMenuVisible }) =>
    isHiddenMenuVisible ? 'flex' : 'none'};
  margin-top: 50px;
  flex-flow: column;
  height: 100%;
  padding-bottom: 140px;
`;
export const Menu = styled.li`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 19pt;
  padding: 3px 0;
  &:nth-child(1) {
    padding-top: 0;
  }
  &:nth-last-child(1) {
    padding-bottom: 0;
    margin-top: auto;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Anchor = styled(Link)<Props>`
  color: ${({ textColor }) => textColor};
`;
export const CloseButton = styled.button<Props>`
  background-color: transparent;
  border: none;
  bottom: 0;
  font-size: 50px;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
`;
