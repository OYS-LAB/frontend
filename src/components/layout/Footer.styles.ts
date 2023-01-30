import styled from 'styled-components';

export const Footer = styled.section`
  width: 100%;
`;

export const Menus = styled.ul`
  display: flex;
  justify-content: center;
`;
export const Menu = styled.li`
  margin-right: 20px;
  &:nth-child(1) {
    margin-right: auto;
  }
  &:nth-last-child(1) {
    margin-right: 0;
  }
`;
