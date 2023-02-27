import styled, { keyframes } from 'styled-components';

interface HrProps {
  reverseColor: string;
}
interface WrapProps {
  baseColor: string;
}

export const TopMarqueeWrap = styled.div<WrapProps>`
  background-color: ${({ baseColor }) => baseColor};
`;

const slideInLeft = keyframes`
 from { transform: translate(-18%, 0px); }
  to { transform: translate(104%, 0px); }
`;

export const TopMarqueeHeader = styled.div`
  width: calc(100% - 50px);
  padding-top: 3px;
  @media (max-width: 1023px) {
    border-bottom-width: 0.4px;
  }
`;

export const TopMarqueeMessage = styled.p`
  display: inline-block;
  width: 100%;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 10px;
  padding-bottom: 6px;
  animation-name: ${slideInLeft};
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  text-transform: uppercase;
  @media (max-width: 1023px) {
    font-size: 10px;
  }
`;

export const TopMarqueeHr = styled.hr<HrProps>`
  border: none;
  border-top: 1px solid ${({ reverseColor }) => reverseColor};
`;
