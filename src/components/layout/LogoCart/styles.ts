import styled, { css } from 'styled-components';
import logoDark from 'images/icon-logo-dark.png';
import logoLight from 'images/icon-logo-light.png';
import { ColorModeState } from 'atoms/colorMode';

interface Props {
  backgroundColor2: string;
  isHiddenMenuVisible: boolean;
}

export const MainHeader = styled.section`
  text-align: center;

  @media (max-width: 600px) {
    padding-top: 10px;
  }
`;
export const Logo = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  padding-top: 13px;
`;
export const CartSection = styled.div<Props>`
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
  }
`;
interface Cart {
  textColor2: string;
}
export const CartMenus = styled.ul<Cart>`
  color: ${({ textColor2 }) => textColor2};
  font-size: 12px;
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
  height: 40px;image.png
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
  @media (max-width: 1023px) {
    width: 172px;
    height: 30px;
  }
`;
