import styled from 'styled-components';

interface HrProps {
  reverseColor: string;
}

export const FurnitureSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;
export const FurnitureSectionHeader = styled.div`
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
export const FurnitureSectionHr = styled.hr<HrProps>`
  width: 300px;
  border: 0;
  border-top: 1px solid ${({ reverseColor }) => reverseColor};
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1023px) {
    width: 150px;
  }
`;
export const FurnitureProductsWrap = styled.div`
  padding: 0 62px;
  width: 100%;
  max-height: 100vh;
  overflow: scroll;
  pointer-events: auto;
  @media (max-width: 1023px) {
    padding: 0;
  }
`;
export const FurnitureProducts = styled.ul`
  display: flex;
  flex-flow: wrap;
  padding: 18px 0 48px;
`;
