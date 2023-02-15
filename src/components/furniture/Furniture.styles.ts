import styled from 'styled-components';

export const Wrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;
export const Header = styled.div`
  font-size: 17pt;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 600;
  text-align: center;
  padding-bottom: 10pt;
`;
export const Hr = styled.hr`
  width: 300px;
  border: 0;
  border-top: 1px solid #000;
  margin-left: auto;
  margin-right: auto;
`;
export const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding-top: 33px;
`;
