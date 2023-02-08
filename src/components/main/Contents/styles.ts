import styled from 'styled-components';

export const Wrap = styled.section`
  margin-top: 0 auto;
`;

export const MainImage = styled.img`
  display: block;
  max-width: 720px;
  width: 60vh;
  height: 540px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  @media (max-width: 1179px) {
    height: 70%;
  }
  @media (max-width: 1023px) {
    height: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 75%;
  }
`;
