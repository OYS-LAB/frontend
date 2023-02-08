import Link from 'next/link';
import styled, { css } from 'styled-components';
interface FooterProps {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  height: string;
  isHiddenMenuVisible: boolean;
}
interface AnchorType {
  textColor: string;
}
interface SectionType {
  display: string;
}

interface HrProps {
  borderColor: string;
}
export const Hr = styled.hr<HrProps>`
  border: none;
  border-top: 1px solid ${({ borderColor }) => borderColor};
  margin-left: 50px;
  padding-bottom: 9px;
  @media (max-width: 1023px) {
    border-top: 0.4px solid ${({ borderColor }) => borderColor};
  }
  @media (max-width: 600px) {
    padding-bottom: 14px;
  }
`;

export const Container = styled.section<SectionType>`
  display: ${({ display }) => display};
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 500;
  font-size: 10px;
  text-align: center;
  padding-bottom: 10px;
  @media (max-width: 1023px) {
    margin-left: -35px;
    font-size: 9pt;
    padding-top: 25px;
    padding-left: 10%;
  }
  @media (max-width: 600px) {
    margin-left: -35px;
    font-size: 9pt;
    padding-top: 10px;
    padding-left: 15%;
  }
`;
export const ContainerChild = styled.p`
  display: inline-block;
  margin-right: 20pt;
  padding-top: 20px;
  &:nth-last-child(1) {
    display: block;
    padding-top: 0;
  }
  @media (max-width: 1023px) {
    padding-top: 0px;
  }
`;

export const Footer = styled.section<FooterProps>`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: background 0.4s ease, color 0.4s ease;
  height: ${({ height }) => height};
  ${({ isHiddenMenuVisible }) =>
    !isHiddenMenuVisible &&
    css`
      &:hover {
        height: auto;
        & ${Container} {
          display: block;
        }
      }
    `}

  @media (max-width: 1023px) {
    display: none;
    border-top-width: 0.4px;
    ${({ isHiddenMenuVisible }) =>
      isHiddenMenuVisible &&
      css`
        display: block;
        height: 170px;
        padding: 35px 0;
      `}
  }
  @media (max-width: 600px) {
    display: none;
    border-top-width: 0.4px;
    ${({ isHiddenMenuVisible }) =>
      isHiddenMenuVisible &&
      css`
        display: block;
        padding: 20px 0;
      `}
  }
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const Menus = styled.ul`
  text-align: center;
  font-size: 9pt;
  @media (max-width: 1023px) {
    padding-right: 0;
    padding-left: 5%;
  }
`;

interface CopyrightProps {
  isMobile?: boolean;
}
export const Copyright = styled.em<CopyrightProps>`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'inline')};
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 9pt;
  position: absolute;
  padding-left: 50px;

  @media (max-width: 1023px) {
    font-weight: 500;
    margin-left: -35px;
    padding-left: 5%;
    ${({ isMobile }) =>
      isMobile
        ? css`
            display: block;
            position: unset;
            text-align: center;
            margin-top: 20px;
          `
        : css`
            display: none;
          `};
  }
  @media (max-width: 600px) {
    margin-left: -35px;
    ${({ isMobile }) =>
      isMobile
        ? css`
            display: block;
            position: unset;
            text-align: center;
            margin-top: 10px;
            padding-left: 10%;
          `
        : css`
            display: none;
          `};
  }
`;
export const Anchor = styled(Link)<AnchorType>`
  color: ${({ textColor }) => textColor};
`;

export const Menu = styled.li`
  display: inline-block;
  margin-right: 20pt;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  &:nth-last-child(1) {
    margin: 0;
  }
  @media (max-width: 1023px) {
    margin-right: 10pt;
    margin-bottom: 7pt;
    font-size: 10pt;
    font-weight: 500;
  }
`;
