import styled from 'styled-components';
export const MainHeader = styled.section`
  text-align: center;
`;
export const Logo = styled.div`
  text-align: center;
`;
export const CartSection = styled.div`
  margin-top: -10px;
  float: right;
  width: 343px;
  height: 23px;
  background: #000;
  display: flex;
  top: -100px;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const CartMenus = styled.ul`
  color: #fff;
  font-size: 12pt;
  padding: 0 50px;
  display: flex;
  align-items: center;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 500;
`;

export const CartMenu = styled.li`
  &:nth-child(2) {
    margin: 0 25px;
  }
`;

export const Image = styled.img``;
