import Link from 'next/link';
import styled from 'styled-components';

export const Footer = styled.section`
  width: 100%;
  border-top: 1px solid #000;
  padding: 6px 50px 7px;
`;

export const Menus = styled.ul`
  text-align: center;
`;
export const Copyright = styled.div`
  display: inline-block;
  float: left;
  font-size: 10pt;
`;
export const SLink = styled(Link)`
  color: black;
`;

export const Menu = styled.li`
  display: inline-block;
  margin-right: 20pt;
  font-size: 10pt;

  &:nth-last-child(1) {
    margin-right: 50px;
  }
`;
