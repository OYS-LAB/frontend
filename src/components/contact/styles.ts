import styled from 'styled-components';

export const Wrap = styled.section``;

export const MainImage = styled.img`
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
`;
export const ContactGroupList = styled.li`
  &: nth-child(2n+1) {
    text-decoration: underline;
    padding-bottom: 4px;
  }
  &: nth-child(2n) {
    padding-bottom: 15px;
  }
`;
