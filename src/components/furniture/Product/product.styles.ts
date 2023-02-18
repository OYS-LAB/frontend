import styled, { css } from 'styled-components';

const border = css`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
`;
const font = css`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
`;

export const Product = styled.li`
  width: 300px;
  ${border};
  &:nth-last-child(1) {
    border-right: none;
  }
  @media (max-width: 820px) {
    width: 50%;
  }
`;
export const Product_wrap = styled.dl`
  overflow: hidden;
  ${font};
  font-size: 12px;
`;
export const Product_wrap_image = styled.dt`
  background-color: grey;
`;
export const Product_image = styled.img`
  width: 100%;
  height: 300px;
  @media (max-width: 820px) {
    height: 50%;
  }
`;
export const Product_footer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  @media (max-width: 820px) {
    height: 48px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
    height: 38px;
  }
`;
export const Product_description = styled.dd`
  width: 50%;
  padding: 10px 20px;
  ${font};
  strong {
    display: block;
    padding-bottom: 7px;
  }
  @media (max-width: 375px) {
    padding: 7px 0 7px 8px;
  }
`;
export const Product_soldOut_wrap = styled.div`
  padding: 10px 15px;
  button {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 15px;
    ${font};
    padding: 5px 10px;
    @media (max-width: 375px) {
      font-size: 7px;
    }
  }
  @media (max-width: 375px) {
    padding: 8px 9px;
  }
`;
