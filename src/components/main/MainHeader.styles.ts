import styled from 'styled-components';

interface Props {
  backgroundColor2: string;
}
export const MainHeader = styled.section`
  text-align: center;
`;
export const Logo = styled.div`
  text-align: center;
`;
export const CartSection = styled.div<Props>`
  margin-top: -10px;
  float: right;
  width: 343px;
  height: 23px;
  background-color: ${props => props.backgroundColor2};
  display: flex;
  top: -100px;

  @media (max-width: 800px) {
    display: none;
  }
`;
interface Cart {
  textColor2: string;
}
export const CartMenus = styled.ul<Cart>`
  color: ${props => props.textColor2};
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
