import styled from 'styled-components';
import Link from 'next/link';

interface AnchorProps {
  textColor: string;
}
interface ListsProps {
  height: string;
  display: string;
  contentDisplay: string;
}

export const ShopMenu = styled.section`
  padding: 18px 0;
  @media (max-width: 1023px) {
    padding: 20px 0;
  }
  @media (max-width: 600px) {
    padding: 16px 0 9px 0;
  }
`;
export const Menus = styled.ul<ListsProps>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 17pt;
  padding-bottom: 6px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1023px) {
    font-size: 14pt;
  }
`;
export const Menu = styled.li`
  &:nth-child(1) {
    padding-bottom: 6px;
  }
  @media (max-width: 1023px) {
    &:nth-child(1) {
      padding-bottom: 4px;
    }
  }
`;
export const Anchor = styled(Link)<AnchorProps>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 17pt;
  color: ${({ textColor }) => textColor};
  @media (max-width: 1023px) {
    font-size: 14pt;
  }
`;
