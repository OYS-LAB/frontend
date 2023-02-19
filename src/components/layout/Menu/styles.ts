import styled, { css } from 'styled-components';
import darkLightIcon from 'images/icon-dark-light.png';
import searchIcon from 'images/icon-search.png';
import logoDark from 'images/icon-logo-dark.png';
import logoLight from 'images/icon-logo-light.png';
import { ColorModeState } from 'atoms/colorMode';

interface darkModeIconProps {
  searchButtonDisplay: string;
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

export const Main = styled.section`
  text-align: center;
  padding-bottom: 20px;
  @media (max-width: 1023px) {
    margin-top: 10px;
  }
  @media (max-width: 820px) {
    padding-bottom: 0;
  }
`;
export const MenuSection = styled.div`
  display: inline-block;
  height: 100%;
`;
export const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 14px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-bottom: 38px;
  &:hover {
    cursor: pointer;
  }
  &:active,
  focus {
    border: none;
  }
`;

const darkModeIcon = styled.i<darkModeIconProps>`
  display: ${({ searchButtonDisplay }) => searchButtonDisplay};
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, center;
`;

export const SearchIcon = styled(darkModeIcon)<darkModeIconProps>`
  background-image: url('${searchIcon.src}');
`;

export const DarkLightIcon = styled(darkModeIcon)`
  background-image: url('${darkLightIcon.src}');
`;
