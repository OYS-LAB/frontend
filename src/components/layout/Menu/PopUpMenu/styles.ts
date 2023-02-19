import styled, { keyframes, css } from 'styled-components';
import { ColorModeState } from 'atoms/colorMode';
import closeDark from 'images/icon-dark-close.png';
import closeLight from 'images/icon-light-close.png';

interface MenusProps {
  isHiddenMenuVisible: boolean;
}
interface Props {
  textColor: string;
}

interface IconProps {
  colorMode: ColorModeState;
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
  padding-top: 50px;
  flex-flow: column;
  height: 100%;
  padding-bottom: 100px;
  animation-name: ${fadeInDown};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  @media (max-width: 1023px) {
    margin-top: 0;
    height: 81%;
    padding-top: 0px;
  }
  @media (max-width: 600px) {
    height: 91%;
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
export const Anchor = styled.a<Props>`
  color: ${({ textColor }) => textColor};
`;
export const CloseButton = styled.button<Props>`
  background-color: transparent;
  border: none;
  bottom: 0;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
`;

const getLogoIconSrc = (colorMode: ColorModeState) =>
  colorMode === 'DARK' ? closeLight.src : closeDark.src;

const Icon = styled.i`
  display: block;
  width: 230px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center, center;
`;

export const Img = styled(Icon)<IconProps>`
  background-image: url('${({ colorMode }) => getLogoIconSrc(colorMode)}');
  width: 230px;
  height: 40px;
  @media (max-width: 1023px) {
    width: 172px;
    height: 30px;
  }
`;
