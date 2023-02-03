import styled from 'styled-components';

interface sectionProps {
  contentDisplay: string;
}

export const Wrap = styled.section<sectionProps>`
  margin-top: 0 auto;
  display: ${({ contentDisplay }) => contentDisplay};
`;

export const MainImage = styled.img`
  display: block;
  width: 500px;
  height: 550px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
