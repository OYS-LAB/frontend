import Link from 'next/link';
import styled from 'styled-components';
interface FooterProps {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}
interface LinkType {
  textColor: string;
}

export const Container = styled.section`
  display: none;
`;

export const Footer = styled.section<FooterProps>`
  border-top: 1px solid ${({ borderColor }) => borderColor};
  padding: 6px 50px 7px;
  position: fixed;
  width: calc(100% - 50px);
  bottom: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 30px;
  &:hover {
    height: auto;
    & ${Container} {
      display: block;
    }
  }
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const Menus = styled.ul`
  text-align: center;
  font-size: 10pt;
`;
export const Copyright = styled.em`
  display: inline;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 400;
  font-size: 10pt;
  position: absolute;
`;
export const SLink = styled(Link)<LinkType>`
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
`;
