import styled from 'styled-components';
import logoDark from 'images/icon-logo-dark.png';
import logoLight from 'images/icon-logo-light.png';
import { ColorModeState } from 'atoms/colorMode';

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
  width: 230px;
  height: 40px;
  @media (max-width: 1023px) {
    width: 172px;
    height: 30px;
  }
`;
