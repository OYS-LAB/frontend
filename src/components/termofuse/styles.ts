import styled from 'styled-components';

export const TermofuseWrap = styled.section`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  overflow-y: auto;
  @media (max-width: 600px) {
    width: 90%;
  }
  p {
    line-height: 20px;
  }
  p:nth-child(2n) {
    padding: 25px 0;
  }
  p:nth-last-child(1) {
    padding-bottom: 90px;
  }
`;
export const TermofuseTitle = styled.h1`
  text-decoration: underline;
  padding-bottom: 15px;
  font-family: 'Red Hat Display';
  font-weight: 500;
`;
