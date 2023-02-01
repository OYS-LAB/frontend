import styled from 'styled-components';
import Link from 'next/link';

export const Main = styled.section`
  text-align: center;
  clear: both;
  margin-top: 30px;
`;
export const MenuSec = styled.div`
  display: inline-block;
`;
export const btnSec = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
`;
export const Menus = styled.ul`
  font-size: 19pt;
`;
export const Menu = styled.li`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  &:nth-child(2) {
    margin: 6px 0 18px 0;
  }
`;
export const SLink = styled(Link)`
  color: #000;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  &:first-child {
    // border: 1px solid red;
  }
  &:last-child {
    // border: 1px solid blue;
  }
  margin-bottom: 38px;
  &:hover {
    cursor: pointer;
  }
  &: active, focus {
    border: none;
  }
`;

export const picSec = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;
