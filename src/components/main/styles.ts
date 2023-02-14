import styled from 'styled-components';

export const Wrap = styled.section`
  margin-top: auto;
  display: flex;
`;

export const MainImage = styled.img`
  display: block;
  max-width: 720px;
  width: 60vh;
  margin: 0 auto;
  margin-top: auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
