import Link from 'next/link';
import styled from 'styled-components';

export const Footer = styled.section`
  border-top: 1px solid #000;
  padding: 6px 50px 7px;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #fff;
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
  left: 50px;
`;
export const SLink = styled(Link)`
  color: #000;
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
