import styled, { css } from 'styled-components';

interface FooterProps {
  backgroundColor: string;
  textcolor: string;
  borderColor: string;
  height: string;
  isHiddenMenuVisible: boolean;
}
interface AnchorType {
  textcolor: string;
}
interface SectionType {
  display: string;
}

interface HrProps {
  borderColor: string;
}
export const FooterHr = styled.hr<HrProps>`
  border: none;
  border-top: 1px solid ${({ borderColor }) => borderColor};
  margin-left: 50px;
  padding-bottom: 9px;
  @media (max-width: 1023px) {
    padding-bottom: 20px;
    border-top: 0.4px solid ${({ borderColor }) => borderColor};
  }
  @media (max-width: 600px) {
    padding-bottom: 14px;
  }
`;

export const FooterInfoContainer = styled.section<SectionType>`
  display: ${({ display }) => display};
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 9pt;
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
  p {
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
  }
`;

export const Footer = styled.section<FooterProps>`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: background 0.4s ease, color 0.4s ease;
  padding-bottom: calc(constant(safe-area-inset-bottom));
  padding-bottom: calc(env(safe-area-inset-bottom));

  height: ${({ height }) => height};
  ${({ isHiddenMenuVisible }) =>
    !isHiddenMenuVisible &&
    css`
      &:hover {
        height: auto;
        & ${FooterInfoContainer} {
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
        height: 150px;
      `}
  }
`;

export const FooterMenuWrap = styled.div`
  position: relative;
`;

export const FooterNavigation = styled.ul`
  text-align: center;
  font-size: 9pt;

  @media (max-width: 1023px) {
    padding-right: 0;
    padding-left: 5%;
  }
  li {
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
  }
`;

interface CopyrightProps {
  isMobile?: boolean;
  textcolor: string;
}
export const Copyright = styled.em<CopyrightProps>`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'inline')};
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 9pt;
  position: absolute;
  padding-left: 50px;
  color: ${({ textcolor }) => textcolor};

  @media (max-width: 1023px) {
    font-weight: 500;
    padding-left: 2%;
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
    ${({ isMobile }) =>
      isMobile
        ? css`
            display: block;
            position: unset;
            text-align: center;
            margin-top: 0;
          `
        : css`
            display: none;
          `};
  }
`;
export const Anchor = styled.span<AnchorType>`
  color: ${({ textcolor }) => textcolor};
`;
