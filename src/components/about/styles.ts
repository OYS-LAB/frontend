import styled from 'styled-components';

export const Wrap = styled.section`
  margin-top: auto;
  display: flex;
`;

export const MainImage = styled.img`
  width: 68%;
  position: fixed;
  bottom: 0;
  margin: 30px auto;
  left: 0;
  right: 0;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
