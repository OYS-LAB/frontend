import styled, { css } from 'styled-components';

interface LayoutStyleProps {
  isVisiblePopUpMenu: boolean;
}

export const Wrap = styled.div<LayoutStyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding-bottom: ${({ isVisiblePopUpMenu }) => isVisiblePopUpMenu ? '110' : '30'}px;

  @media (max-width: 1023px) {
    ${({ isVisiblePopUpMenu }) =>
      isVisiblePopUpMenu &&
      css`
        padding-bottom: 150px;
      `}
  }
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height:100%;
  overflow-y: hidden;
`;
