import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
interface Props {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}
interface LinkType {
  textColor: string;
}
export const Footer = styled.section<Props>`
  border-top: 1px solid ${props => props.borderColor};
  padding: 6px 50px 7px;
  position: fixed;
  width: calc(100% - 50px);
  bottom: 0;
  background-color: ${props => props.backgroundColor};
  height: 30px;
  &:hover {
    height: 300px;
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
  color: ${props => props.textColor};
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
