import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  textColor: string;
}
interface SideMode {
  height: string;
  display: string;
  contentDisplay: string;
}

export const SideMenus = styled.section`
  padding-bottom: 18px;
`;
export const List = styled.ul<SideMode>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 19pt;
  padding-bottom: 6px;
  &:hover {
    cursor: pointer;
  }
`;
export const SLink = styled(Link)<Props>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 19pt;
  color: ${props => props.textColor};
`;
