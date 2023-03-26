import styled from 'styled-components';

export const ContactWrap = styled.section``;

export const ContactMainImage = styled.img`
  display: block;
  max-width: 720px;
  width: 100vh;
  margin: 0 auto;
  margin-top: auto;
  padding-bottom: 30px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 23px 20px 23px;
  }
`;
export const ContactGroup = styled.div`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 12px;
  width: 100%;
  max-height: 100vh;
  overflow: scroll;
  p {
    &: nth-child(2n+1) {
      text-decoration: underline;
      padding-bottom: 4px;
    }
    &: nth-child(2n) {
      font-weight: 400;
      padding-bottom: 15px;
    }
    &: nth-child(5) {
      text-decoration: none;
      font-style: italic;
      padding: 30px 0 15px 0;
    }
    &: nth-child(6) {
      text-decoration: underline;
      font-weight: 500;
      padding-bottom: 4px;
    }
    &: nth-last-child(1) {
      text-decoration: none;
      font-weight: 400;
    }
  }
`;
