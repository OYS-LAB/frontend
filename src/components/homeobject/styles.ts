import styled from 'styled-components';

interface HrProps {
  reverseColor: string;
}

export const HomeObjectSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;
export const HomeObjectSectionHeader = styled.div`
  font-size: 17pt;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  text-align: center;
  padding-bottom: 10pt;
  @media (max-width: 1023px) {
    padding-bottom: 4px;
    font-size: 14pt;
  }
`;
export const HomeObjectSectionHr = styled.hr<HrProps>`
  width: 300px;
  border: 0;
  border-top: 1px solid ${({ reverseColor }) => reverseColor};
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1023px) {
    width: 150px;
  }
`;
export const HomeObjectMessageWrap = styled.div`
  padding: 0 62px;
  width: 100%;
  max-height: 100vh;
  overflow: scroll;
  pointer-events: auto;
  text-align: center;
  font-family: 'Red Hat Display', sans-serif;
  p:nth-child(1) {
    padding: 200px 0 10px 0;
    font-size: 16px;
    font-weight: 600;
  }
  p:nth-last-child(1) {
    font-size: 12px;
    font-weight: 400;
  }
  @media (max-width: 1024px) {
    padding: 0;
    p:nth-child(1) {
      padding: 140px 0 10px 0;
    }
  }
  @media (max-width: 414px) {
    padding: 0;
    p:nth-child(1) {
      padding: 170px 0 10px 0;
      font-size: 15px;
      font-weight: 600;
    }
  }
`;
