import styled from 'styled-components';
import Link from 'next/link';

interface AnchorProps {
  textColor: string;
}
interface ListProps {
  height: string;
  display: string;
  contentDisplay: string;
}

export const ShopMenu = styled.section`
  padding-bottom: 18px;
`;
export const List = styled.ul<ListProps>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 19pt;
  padding-bottom: 6px;
  &:hover {
    cursor: pointer;
  }
`;
export const Anchor = styled(Link)<AnchorProps>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 19pt;
  color: ${props => props.textColor};
`;
