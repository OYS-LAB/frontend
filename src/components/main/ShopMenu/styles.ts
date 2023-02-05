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
  padding-bottom: 18px;
`;
export const Lists = styled.ul<ListsProps>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 18pt;
  padding-bottom: 6px;
  &:hover {
    cursor: pointer;
  }
`;
export const List = styled.li`
  &: nth-child(1) {
    padding-bottom: 6px;
  }
`;
export const Anchor = styled(Link)<AnchorProps>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 18pt;
  color: ${({ textColor }) => textColor};
`;
