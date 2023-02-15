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
  width: 300px;
  height: 300px;
`;
export const Product_footer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
`;
export const Product_description = styled.dd`
  width: 50%;
  padding: 10px 20px;
  ${font};
  strong {
    display: block;
    padding-bottom: 7px;
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
  }
`;
