import styled, { css } from 'styled-components';
import darkIcon from 'images/icon-dark-light.png';
import lightIcon from 'images/icon-light-light.png';
import { ColorMode } from 'atoms/colorMode';

interface DarkMode {
  colorButtonDisplay: string;
}
interface IconProps {
  colorMode: ColorMode;
}

const getLogoIconSrc = (colorMode: ColorMode) =>
  colorMode === 'DARK' ? lightIcon.src : darkIcon.src;

export const ColorModeButton = styled.button<DarkMode>`
  background-color: transparent;
  border: none;
  padding: 0;
  display: block;
  &:hover {
    cursor: pointer;
  }
  &:active,
  focus {
    border: none;
  }
  margin: ${({ colorButtonDisplay }) => colorButtonDisplay};

  @media (max-width: 1023px) {
    padding-bottom: 18px;
  }
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`;

const Icon = styled.i`
  display: block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, center;
  @media (max-width: 1023px) {
    width: 15px;
    height: 15px;
  }
`;

export const DarkLightIcon = styled(Icon)<IconProps>`
  background-image: url('${({ colorMode }) => getLogoIconSrc(colorMode)}');
`;
