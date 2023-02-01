import Link from 'next/link';
import styled from 'styled-components';

export const Footer = styled.section`
  border-top: 1px solid #000;
  padding: 6px 50px 7px;
`;

export const Menus = styled.ul`
  text-align: center;
  font-size: 10pt;
`;
export const Copyright = styled.div`
  display: inline-block;
  float: left;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 400;
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
    margin-right: 50px;
  }
`;
