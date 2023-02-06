import styled from 'styled-components';
import logoDark from 'images/icon-logo-dark.png';
import logoLight from 'images/icon-logo-light.png';
import { ColorModeState } from 'atoms/colorMode';

interface Props {
  backgroundColor2: string;
}

export const MainHeader = styled.section`
  text-align: center;
`;
export const Logo = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  padding-top: 13px;
`;
export const CartSection = styled.div<Props>`
  margin-top: 4px;
  float: right;
  width: 35%;
  height: 23px;
  background-color: ${({ backgroundColor2 }) => backgroundColor2};
  display: flex;
  top: -100px;

  @media (max-width: 800px) {
    display: none;
  }
`;
interface Cart {
  textColor2: string;
}
export const CartMenus = styled.ul<Cart>`
  color: ${({ textColor2 }) => textColor2};
  font-size: 10pt;
  padding: 0 50px;
  display: flex;
  align-items: center;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 500;
`;

export const CartMenu = styled.li`
  &:nth-child(2) {
    margin: 0 25px;
  }
`;

export const Image = styled.img`
  width: 230px;
  height: 40px;
`;

interface IconProps {
  colorMode: ColorModeState;
}

const getLogoIconSrc = (colorMode: ColorModeState) =>
  colorMode === 'DARK' ? logoLight.src : logoDark.src;

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
  position: fixed;
  width: 230px;
  height: 40px;
`;
