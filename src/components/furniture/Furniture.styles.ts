import styled from 'styled-components';

export const Wrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  margin-bottom: 42px;
`;
export const Header = styled.div`
  font-size: 17pt;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  text-align: center;
  padding-bottom: 10pt;
`;
export const Hr = styled.hr`
  width: 30%;
  border: 0;
  border-top: 1px solid #000;
  margin-left: auto;
  margin-right: auto;
`;
export const Products_wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 33px 62px 0 62px;
`;
export const Products = styled.ul`
  display: flex;
  flex-flow: wrap;
  align-items: center;
`;
