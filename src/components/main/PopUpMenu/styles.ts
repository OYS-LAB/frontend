import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
interface MenusProps {
  isHiddenMenuVisible: boolean;
}
interface Props {
  textColor: string;
}
const fadeInDown = keyframes`
0% {
            opacity: 0;
            transform: translate3d(0, -5%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`;

export const PopupMenu = styled.ul<MenusProps>`
  display: ${({ isHiddenMenuVisible }) =>
    isHiddenMenuVisible ? 'flex' : 'none'};
  animation: fadeInDown 1s;
  margin-top: 50px;
  flex-flow: column;
  height: 100%;
  padding-bottom: 140px;
  animation-name: ${fadeInDown};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  @media (max-width: 1023px) {
    margin-top: 0;
    height: 85%;
    padding-bottom: inherit;
  }
`;
export const Menu = styled.li`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 17pt;
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
  @media (max-width: 1023px) {
    font-size: 14pt;
    padding: 2px 0;
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
