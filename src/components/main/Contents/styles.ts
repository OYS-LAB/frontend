import styled from 'styled-components';

export const Wrap = styled.section`
  margin-top: 0 auto;
`;

export const MainImage = styled.img`
  display: block;
  width: 720px;
  height: 540px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: 1023px) {
    width: 100%;
    height: 504px;
  }
`;
