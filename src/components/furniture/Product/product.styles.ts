import styled, { css } from 'styled-components';

interface BorderProps {
  borderColor: string;
}
interface SoldoutProps {
  backgroundColor2: string;
  textcolor2: string;
}
const border = css<BorderProps>`
  border-top: 1px solid ${({ borderColor }) => borderColor};
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  border-right: 1px solid ${({ borderColor }) => borderColor};
`;

const font = css`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
`;

export const Product = styled.li`
  width: 33.3%;
  ${border};
  @media (min-width: 1023px) {
    &:nth-child(3n) {
      border-right: 1px solid transparent;
    }
    &:nth-child(n + 4) {
      border-top: none;
    }
  }
  @media (max-width: 820px) {
    width: 50%;
    &:nth-child(2n) {
      border-right: 1px solid transparent;
    }
    &:nth-child(n + 3) {
      border-top: none;
    }
  }
`;
export const Product_wrap = styled.dl`
  position: relative;
  ${font};
  font-size: 12px;
`;
export const Product_wrap_image = styled.dt`
  width: 100%;
  height: 100%;
`;
export const Product_image = styled.img`
  width: 100%;
  display: block;
`;
export const Product_footer = styled.section<BorderProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${({ borderColor }) => borderColor};
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
export const Product_description = styled.dd`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 10px;
  ${font};
  strong {
    display: block;
    padding-bottom: 7px;
  }
  @media (max-width: 375px) {
    padding: 7px 0 7px 8px;
  }
`;
export const Product_soldOut_wrap = styled.div<SoldoutProps>`
  padding: 10px 15px;
  button {
    background-color: ${({ backgroundColor2 }) => backgroundColor2};
    color: ${({ textcolor2 }) => textcolor2};
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
