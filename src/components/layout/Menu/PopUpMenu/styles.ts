import styled, { keyframes, css } from 'styled-components';
import { ColorMode } from 'atoms/colorMode';
import closeDark from 'images/icon-dark-close.png';
import closeLight from 'images/icon-light-close.png';

interface MenusProps {
  isHiddenMenuVisible: boolean;
}
interface Props {
  reverseColor: string;
}

interface IconProps {
  colorMode: ColorMode;
}
const fadeInDown = keyframes`
0%{
opacity: 0;
transform: translateY(-5%);

}100%{
opacity: 1;
transform: translateY(0%);
}
`;
export const PopupMenu = styled.ul<MenusProps>`
  display: ${({ isHiddenMenuVisible }) =>
    isHiddenMenuVisible ? 'flex' : 'none'};
  animation: fadeInDown 1s;
  padding-top: 40px;
  flex-flow: column;
  height: 100%;
  min-height: 200px;
  overflow-y: auto;
  padding-bottom: 100px;
  animation-name: ${fadeInDown};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  @media (max-width: 1023px) {
    margin-top: 0;
    padding-top: 0px;
  }
  li {
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
  }
`;
export const PopupMenuAnchor = styled.a<Props>`
  color: ${({ reverseColor }) => reverseColor};
`;
export const PopupMenuCloseButton = styled.button<Props>`
  background-color: transparent;
  border: none;
  bottom: 0;
  cursor: pointer;
  color: ${({ reverseColor }) => reverseColor};
`;

const getLogoIconSrc = (colorMode: ColorMode) =>
  colorMode === 'DARK' ? closeLight.src : closeDark.src;

const Icon = styled.i`
  display: block;
  width: 230px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center, center;
`;

export const PopupMenuCloseImg = styled(Icon)<IconProps>`
  background-image: url('${({ colorMode }) => getLogoIconSrc(colorMode)}');
  width: 230px;
  height: 40px;
  @media (max-width: 1023px) {
    width: 172px;
    height: 30px;
  }
`;
