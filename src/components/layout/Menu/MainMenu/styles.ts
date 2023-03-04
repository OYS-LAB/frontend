import styled from 'styled-components';

interface ListsProps {
  height: string;
  display: string;
  contentDisplay: string;
}

export const MainMenuWrap = styled.section`
  padding: 18px 0;
  @media (max-width: 1023px) {
    padding: 20px 0;
  }
  @media (max-width: 600px) {
    padding: 16px 0 9px 0;
  }
`;
export const MainMenu = styled.ul<ListsProps>`
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
  li {
    &:nth-child(1) {
      padding-bottom: 6px;
    }
    @media (max-width: 1023px) {
      &:nth-child(1) {
        padding-bottom: 4px;
      }
    }
  }
`;

interface MainMenuAnchorProps {
  reverseColor: string;
}

export const MainMenuAnchor = styled.span<MainMenuAnchorProps>`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  font-size: 17pt;
  color: ${({ reverseColor }) => reverseColor};
  @media (max-width: 1023px) {
    font-size: 14pt;
  }
`;
