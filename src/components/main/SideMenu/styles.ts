import Link from 'next/link';
import styled from 'styled-components';
interface ulProps {
  sideMenuDisplay: string;
}
interface Props {
  textColor: string;
}

export const Menus = styled.ul<ulProps>`
  display: ${({ sideMenuDisplay }) => sideMenuDisplay};
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
  }
  &:hover {
    cursor: pointer;
  }
`;
export const SLink = styled(Link)<Props>`
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
