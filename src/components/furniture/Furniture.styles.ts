import styled from 'styled-components';

export const Wrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: auto;
  flex-flow: column;
  padding-bottom: 42px;
  overflow: hidden;
  @media (max-width: 1023px) {
    padding-bottom: 32px;
  }
`;
export const Header = styled.div`
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
export const Hr = styled.hr`
  width: 300px;
  border: 0;
  border-top: 1px solid #000;
  margin-left: auto;
  margin-right: auto;
  height: 33px;
  @media (max-width: 1023px) {
    width: 150px;
  }
  @media (max-width: 820px) {
    height: 23px;
  }
`;
export const ProductsWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 62px;
  overflow-y: auto;
  @media (max-width: 1023px) {
    padding: 23px 0 0 0;
  }
`;
export const Products = styled.ul`
  display: flex;
  flex-flow: wrap;
`;
